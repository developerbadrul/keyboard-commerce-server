import { Router } from "express";
import { ProductsRoute } from "../modules/products/products.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/products",
        route: ProductsRoute
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;