import { TOrder } from "./orders.interface"
import OrderModel from "./orders.model"


const addNewOrderInDb = async (order: TOrder) => {
    const result = await OrderModel.create(order)
    console.log("new order in service", result);
    return result
}

const getAllOrderFromDb = async () => {
    const result = await OrderModel.find();
    return result;
}


export const OrderService = {
    addNewOrderInDb,
    getAllOrderFromDb
}