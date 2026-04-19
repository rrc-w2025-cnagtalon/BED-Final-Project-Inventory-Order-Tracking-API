import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orderController';
import { validateRequest } from '../middleware/validate';
import { orderSchemas } from '../validation/orderSchemas';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderNumber", getOrderById);
orderRoutes.post("/", validateRequest(orderSchemas.create), createOrder);
orderRoutes.put("/:orderNumber", updateOrder);
orderRoutes.delete("/:orderNumber", deleteOrder);

export default orderRoutes;