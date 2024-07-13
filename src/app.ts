import express, { Application, Request, Response } from "express"
import cors from "cors";
import router from "./app/routes";
import httpStatus from "http-status";
import globalErrorHandaler from "./app/middlewares/globalErrorHandaler";
import AppError from "./app/errors/AppError";
import path from "path";



const app: Application = express()

// parser 
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));


// application documentation
const publicDir = path.join(__dirname, 'app', 'public');
app.use(express.static(publicDir));


app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// application route 

app.use("/api", router)


// Error handling for unhandled routes
app.all('*', (req, res, next) => {
    next(new AppError(httpStatus.NOT_FOUND, `Not found ${req.originalUrl}`));
});


app.use(globalErrorHandaler)

export default app;