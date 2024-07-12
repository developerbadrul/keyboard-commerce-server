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


export const OrderService = {
    addNewOrderInDb,
    getAllOrderFromDb
}