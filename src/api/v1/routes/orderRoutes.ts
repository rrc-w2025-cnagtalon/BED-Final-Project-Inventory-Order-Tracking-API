import { Router } from 'express';
import { getAllOrders, getOrderById } from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:id", getOrderById);

export default orderRoutes;