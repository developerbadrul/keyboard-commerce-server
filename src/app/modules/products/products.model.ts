import mongoose, { Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productsSchema = new Schema<TProducts>({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    availableQuantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


export const  ProductsModal = mongoose.models.product ?? mongoose.model("product", productsSchema)