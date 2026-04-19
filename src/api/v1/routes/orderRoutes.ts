import { Router } from 'express';
import { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orderController';
import { validateRequest } from '../middleware/validate';
import { orderSchemas } from '../validation/orderSchemas';
import  authenticate  from '../middleware/authenticate';
import  isAuthorized  from '../middleware/authorize';
const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);
orderRoutes.get("/:orderNumber", getOrderById);

orderRoutes.post("/", authenticate,  isAuthorized({hasRole: ["manager", "employee", "customer"], allowSameUser: true}), validateRequest(orderSchemas.create), createOrder);
orderRoutes.put("/:orderNumber", authenticate,  isAuthorized({hasRole: ["manager", "employee"], allowSameUser: true}), validateRequest(orderSchemas.update), updateOrder);
orderRoutes.delete("/:orderNumber", authenticate,  isAuthorized({hasRole: ["manager"], allowSameUser: true}), validateRequest(orderSchemas.delete), deleteOrder);

export default orderRoutes;