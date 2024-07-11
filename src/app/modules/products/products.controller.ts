import { RequestHandler } from "express";
import { ProductService } from "./products.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";


const getAllProducts: RequestHandler = async (req, res, next) => {

    try {
        const { search, minPrice, maxPrice, sort } = req.query;
        
        console.log(req.query);
        console.log("search", search, minPrice, maxPrice, sort);


        const products = await ProductService.getAllProductFromDb(
            search as string,
            minPrice ? parseFloat(minPrice as string) : null,
            maxPrice ? parseFloat(maxPrice as string) : null,
            sort as string
        )

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