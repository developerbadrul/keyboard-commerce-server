import { z } from 'zod';

export const ProductValidationSchema = z.object({
    image: z.string().min(1, { message: "Image URL is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    brand: z.string().min(1, { message: "Brand is required" }),
    availableQuantity: z.number().min(0, { message: "Available quantity must be a number greater than or equal to 0" }),
    price: z.number().min(0, { message: "Price must be a number greater than or equal to 0" }),
    rating: z.number().min(0, { message: "Rating must be a number greater than or equal to 0" }).max(5, { message: "Rating cannot be more than 5" }),
    description: z.string().min(1, { message: "Description is required" }),
});




export const ProductValidation = {
    ProductValidationSchema
}