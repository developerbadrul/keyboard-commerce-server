import express, { Application, Request, Response } from "express"
import cors from "cors";



const app: Application = express()

// parser 
app.use(express.json());
app.use(cors());

// application route 

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})

app.get("/", (req: Request, res: Response) => {
    res.json("Hello World")
})

// // Error handling for unhandled routes
// app.all('*', (req, res, next) => {
//     next(new Error(httpStatus.NOT_FOUND, `Not found ${req.originalUrl}`));
// });

export default app;