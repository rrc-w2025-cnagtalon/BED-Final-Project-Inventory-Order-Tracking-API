import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import helmet from "helmet";
import { apiHelmetConfig } from "../src/config/helmetConfig";
import { getCorsOptions } from "../src/config/corsConfig";
import morgan from "morgan";
import productRoutes from "./api/v1/routes/productRoutes"
import orderRoutes from "./api/v1/routes/orderRoutes";
import { initScheduler } from "./config/scheduler";
import { accessLogger, errorLogger, consoleLogger } from "./api/v1/middleware/logger"
import errorHandler from "./api/v1/middleware/errorHandler";
import managerRoutes from "./api/v1/routes/managerRoutes";

// Initialize Express application
const app: Express = express();

app.use(apiHelmetConfig);
app.use(cors(getCorsOptions()));

// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

app.use(morgan("combined"));
app.use(express.json());

initScheduler();

app.use("/api/v1/kakanin", productRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/orders", managerRoutes);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// Global error handling middleware (MUST be applied last)
app.use(errorHandler);

export default app;