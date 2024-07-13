import { Router } from "express"
import { ProductController } from "./products.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./products.validate";


const router = Router()

// get all products 
router.get("/", ProductController.getAllProducts)

// get single products 
router.get("/:productId", ProductController.getSingleProduct)

// post products 
router.post("/", validateRequest(ProductValidation.ProductValidationSchema, "body"), ProductController.addNewProduct)

// update product 
router.put(
    "/:id",
    validateRequest(ProductValidation.ProductUpdateValidationSchema, "body"),
    ProductController.updateProduct
)

// update product 
router.delete(
    "/:id",
    ProductController.deleteProduct
)



export const ProductsRoute = router;