import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

const validateRequest = (schema: AnyZodObject, source: "body" | "params" | "query") => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req[source]);
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessage = error.errors.map(err => err.message).join(", ");
                next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
            } else {
                next(error);
            }
        }
    }
}


export default validateRequest;