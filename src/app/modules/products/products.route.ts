import { Router } from "express"
import { ProductController } from "./products.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./products.validate";


const router = Router()

// get all products 
router.get("/", ProductController.getAllProducts)

// post products 
router.post("/", validateRequest(ProductValidation.ProductValidationSchema, "body"), ProductController.addNewProduct)



export const ProductsRoute = router;