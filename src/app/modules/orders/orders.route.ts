import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidation } from "./order.validate";
import { OrderController } from "./orders.controller";

const router = Router()

// add new order
router.post(
    "/",
    validateRequest(OrderValidation.orderValidationSchema, "body"),
    OrderController.addNewOrder
)
// get orders
router.get(
    "/",
    OrderController.getAllOrder
)


export const OrderRoute = router