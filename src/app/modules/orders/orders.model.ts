import mongoose, { Schema, Model } from "mongoose";
import { TAddress, TOrder } from "./orders.interface";

const addressSchema = new Schema<TAddress>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
}, { _id: false });


const orderSchema = new Schema<TOrder>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    orderItem: [
        {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true
        }
    ],
    status: {
        type: String,
        enum: ["confirmed", "in process"],
        default: "in process",
        required: true
    },
    deliveryAddress: { type: addressSchema, required: true }
}, { timestamps: true });


// Create the model only if it doesn't already exist
const OrderModel: Model<TOrder> = mongoose.models.order ?? mongoose.model<TOrder>("order", orderSchema);

export default OrderModel;
