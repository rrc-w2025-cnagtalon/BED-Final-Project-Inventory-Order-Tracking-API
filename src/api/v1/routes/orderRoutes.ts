import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderNumber", getOrderById);
orderRoutes.post("/", createOrder);
orderRoutes.put("/:orderNumber", updateOrder);
orderRoutes.delete("/:orderNumber", deleteOrder);

export default orderRoutes;