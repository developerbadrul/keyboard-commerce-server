import { z } from 'zod';

export const ProductValidationSchema = z.object({
    image: z.string().min(1, { message: "Image URL is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    brand: z.string().min(1, { message: "Brand is required" }),
    isDelete: z.boolean().default(false),
    availableQuantity: z.number().min(0, { message: "Available quantity must be a number greater than or equal to 0" }),
    price: z.number().min(0, { message: "Price must be a number greater than or equal to 0" }),
    rating: z.number().min(0, { message: "Rating must be a number greater than or equal to 0" }).max(5, { message: "Rating cannot be more than 5" }),
    description: z.string().min(1, { message: "Description is required" }),
});


export const ProductUpdateValidationSchema = z.object({
    image: z.string().min(1, { message: "Image URL is required" }).optional(),
    title: z.string().min(1, { message: "Title is required" }).optional(),
    brand: z.string().min(1, { message: "Brand is required" }).optional(),
    availableQuantity: z.number().min(0, { message: "Available quantity must be a number greater than or equal to 0" }).optional(),
    price: z.number().min(0, { message: "Price must be a number greater than or equal to 0" }).optional(),
    rating: z.number().min(0, { message: "Rating must be a number greater than or equal to 0" }).max(5, { message: "Rating cannot be more than 5" }).optional(),
    description: z.string().min(1, { message: "Description is required" }).optional(),
});


// export const ProductDeleteValidation = z.object({
//     isDelete: z.boolean().,
// })


export const ProductValidation = {
    ProductValidationSchema,
    ProductUpdateValidationSchema
};
