import { Response } from "express";


type TResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string;
    data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    const { success, statusCode, message, data: responseData } = data;

    res.status(statusCode).json(
        {
            success,
            statusCode,
            message,
            data: responseData
        }
    )
}


export default sendResponse;