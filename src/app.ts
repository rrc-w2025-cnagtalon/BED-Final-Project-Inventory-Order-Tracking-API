import express, { Express } from "express";
import morgan from "morgan";
import productRoutes from "./api/v1/routes/productRoutes"

// Initialize Express application
const app: Express = express();

app.use(morgan("combined"));

app.use(express.json());

app.use("/api/v1/kakanin", productRoutes);
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

export default app;