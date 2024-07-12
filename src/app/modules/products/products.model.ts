import mongoose, { Model, Schema } from "mongoose";
import { TProducts } from "./products.interface";
import { boolean } from "zod";

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
    isDelete: {
        type: Boolean,
        default: false,
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


export const ProductsModal: Model<TProducts> = mongoose.models.product ?? mongoose.model<TProducts>("product", productsSchema)