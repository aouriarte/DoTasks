import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import "./models/task";

const app: Application = express(); // le digo que es una aapliación de express
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// importo y uso mis rutas
import tasksRoutes from "./routes/tasks.routes";
app.use("/tasks", tasksRoutes);

// catching error
interface error {
  status: number;
  message: string;
}
app.use((err: error, _req: Request, res: Response, _next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default app;
