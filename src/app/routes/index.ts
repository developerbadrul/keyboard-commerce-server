import { Router } from "express";
import { ProductsRoute } from "../modules/products/products.route";
import { OrderRoute } from "../modules/orders/orders.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/products",
        route: ProductsRoute
    },
    {
        path: "/order",
        route: OrderRoute
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;