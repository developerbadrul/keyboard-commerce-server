import { z } from "zod";



export const orderValidationSchema = z.object({
    name: z.string({ message: "Name is required" }),
    email: z.string({ message: "Email is required" }).email({ message: "Invalid email address" }),
    phoneNumber: z.string({ message: "Phone number is required" }),
    deliveryAddress: z.object({
        street: z.string({ message: "Street is required" }),
        city: z.string({ message: "City is required" }),
        postalCode: z.string({ message: "Postal code is required" }),
        country: z.string({ message: "Country is required" }),
    }
    ),
});

export const OrderValidation = {
    orderValidationSchema
};
