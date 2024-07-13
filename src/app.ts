import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import httpStatus from "http-status";
import AppError from "./app/errors/AppError";
import path from "path";
import globalErrorHandaler from "./app/middlewares/globalErrorHandaler";

const app: Application = express();

// Set up CORS middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://keyboard-commerce-server.vercel.app'],
    credentials: true
}));

// Manually set CORS headers for all responses
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// JSON parser middleware
app.use(express.json());

// Static files middleware
const publicDir = path.join(__dirname, 'app', 'public');
app.use(express.static(publicDir));

// Serve the index.html file
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// API routes
app.use("/api", router);

// Error handling for unhandled routes
app.all('*', (req: Request, res: Response, next) => {
    next(new AppError(httpStatus.NOT_FOUND, `Not found ${req.originalUrl}`));
});

// Global error handler middleware
app.use(globalErrorHandaler);

export default app;
