import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder } from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:id", getOrderById);
orderRoutes.post("/", createOrder);
export default orderRoutes;