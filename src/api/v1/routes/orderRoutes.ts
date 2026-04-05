import { Router } from 'express';
import { getAllOrders } from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get("/", getAllOrders);

export default orderRoutes;