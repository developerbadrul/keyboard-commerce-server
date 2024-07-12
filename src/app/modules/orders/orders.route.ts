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

// get all orders
router.get(
    "/",
    OrderController.getAllOrder
)

// change order status
router.put(
    "/:orderId",
    OrderController.updateOrderStatus
)


export const OrderRoute = router