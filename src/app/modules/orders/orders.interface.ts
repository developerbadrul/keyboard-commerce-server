import { Types } from "mongoose";


export interface TAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}


export interface TOrder {
    name: string;
    email: string;
    phoneNumber: string,
    orderItem: Types.ObjectId[]
    status: "confirmed" | "in process";
    deliveryAddress: TAddress
}