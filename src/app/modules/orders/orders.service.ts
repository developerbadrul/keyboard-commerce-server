import httpStatus from "http-status"
import AppError from "../../errors/AppError"
import { TOrder } from "./orders.interface"
import OrderModel from "./orders.model"
import { ProductsModal } from "../products/products.model"


const addNewOrderInDb = async (order: TOrder) => {
    // Fetch all products in the order to check availability
    const products = await ProductsModal.find({
        _id: { $in: order.orderItem },
        isDelete: false
    });

    // Check if all products exist and have sufficient availableQuantity
    for (const productId of order.orderItem) {
        const product = products.find(p => p._id.equals(productId));
        if (!product || product.availableQuantity <= 0) {
            throw new AppError(
                httpStatus.BAD_REQUEST,
                `Product with ID ${productId} is either not found or out of stock`
            );
        }
    }

    // Create the order
    const newOrder = await OrderModel.create(order);

    // Decrease availableQuantity for each ordered product
    for (const productId of order.orderItem) {
        const product = products.find(p => p._id.equals(productId));
        if (product) {
            product.availableQuantity -= 1;
            await product.save();
        }
    }

    return newOrder;
};



const getAllOrderFromDb = async () => {
    const result = await OrderModel.find().populate({
        path: "orderItem",
        select: "_id image title brand price description"
    });;
    return result;
}


const updateOrderStatusFromDb = async (orderId: string) => {
    try {
        // Check if order exists
        const order = await OrderModel.findById(orderId);
        if (!order) {
            throw new AppError(httpStatus.NOT_FOUND, "Order not found");
        }

        // Check if order is already confirmed
        if (order.status === "confirmed") {
            throw new AppError(httpStatus.BAD_REQUEST, "Order is already confirmed");
        }

        // Update order status
        const updatedOrder = await OrderModel.findByIdAndUpdate(
            orderId,
            { status: "confirmed" },
            { new: true }
        );

        if (!updatedOrder) {
            throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to update order status");
        }

        return updatedOrder;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Order is already confirmed");
    }
};




export const OrderService = {
    addNewOrderInDb,
    getAllOrderFromDb,
    updateOrderStatusFromDb
}