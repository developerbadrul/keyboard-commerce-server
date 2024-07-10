import express, { Application, Request, Response } from "express"
import cors from "cors";
import router from "./app/routes";
import httpStatus from "http-status";
import globalErrorHandaler from "./app/middlewares/globalErrorHandaler";
import AppError from "./app/errors/AppError";



const app: Application = express()

// parser 
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));


// application route 

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})



// Error handling for unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(httpStatus.NOT_FOUND, `Not found ${req.originalUrl}`));
});


app.use(globalErrorHandaler)

export default app;