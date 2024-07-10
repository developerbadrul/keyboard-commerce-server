import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import sendResponse from "../utils/sendResponse";
import config from "../config";

const globalErrorHandaler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = err.statusCode ?? httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message ?? `Internal Server Error`;

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        stack: config.NODE_ENV === 'development' ? err?.stack : undefined,
    });
}



export default globalErrorHandaler;
