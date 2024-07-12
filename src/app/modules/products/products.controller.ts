import { RequestHandler } from "express";
import { ProductService } from "./products.service";
import httpStatus, { NOT_FOUND } from "http-status";
import sendResponse from "../../utils/sendResponse";
import AppError from "../../errors/AppError";


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

const updateProduct: RequestHandler = async (req, res, next) => {

    const { id } = req.params;

    try {
        const products = await ProductService.updateProductInDb(id, req.body)

        if (!products) {
            throw new AppError(NOT_FOUND, "product not found")
        }

        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.CREATED,
                message: "Product Update Successfully",
                data: products
            }
        )
    } catch (error) {
        next(error);
    }
}

const deleteProduct: RequestHandler = async (req, res, next) => {

    const { id } = req.params;

    try {
        const products = await ProductService.deleteProductFromDb(id)

        if (!products) {
            throw new AppError(NOT_FOUND, "product not found")
        }

        sendResponse(res,
            {
                success: true,
                statusCode: httpStatus.CREATED,
                message: "Product Delete Successfully",
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
    updateProduct,
    deleteProduct
}