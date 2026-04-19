import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orderController';
import { validateRequest } from '../middleware/validate';
import { orderSchemas } from '../validation/orderSchemas';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderNumber", getOrderById);
orderRoutes.post("/", validateRequest(orderSchemas.create), createOrder);
orderRoutes.put("/:orderNumber", validateRequest(orderSchemas.update), updateOrder);
orderRoutes.delete("/:orderNumber", validateRequest(orderSchemas.delete), deleteOrder);

export default orderRoutes;