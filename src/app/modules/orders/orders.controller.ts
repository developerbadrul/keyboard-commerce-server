import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import { OrderService } from "./orders.service";
import httpStatus from "http-status";

const addNewOrder: RequestHandler = async (req, res, next) => {
    try {
        const order = await OrderService.addNewOrderInDb(req.body)
        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.CREATED,
                message: "New Order Added",
                data: order
            }
        )
    } catch (error) {
        next(error);
    }
}

const getAllOrder: RequestHandler = async (req, res, next) => {
    try {
        const orders = await OrderService.getAllOrderFromDb()

        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.CREATED,
                message: "All Order Retrived",
                data: orders
            }
        )
    } catch (error) {
        next(error);
    }
}




export const OrderController = {
    addNewOrder,
    getAllOrder
}