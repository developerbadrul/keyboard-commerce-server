import { RequestHandler } from "express";
import { ProductService } from "./products.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";


const getAllProducts: RequestHandler = async (req, res, next) => {

    try {
        const products = await ProductService.getAllProductFromDb()
        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.OK,
                message: "All Product Retrived",
                data: products
            }
        )
    } catch (error) {
        next(error);
    }
}


const addNewProduct: RequestHandler = async (req, res, next) => {

    try {
        const products = await ProductService.addNewProductInDb(req.body)
        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.CREATED,
                message: "Product Add Successfully",
                data: products
            }
        )
    } catch (error) {
        next(error);
    }
}



export const ProductController = {
    getAllProducts,
    addNewProduct,
}