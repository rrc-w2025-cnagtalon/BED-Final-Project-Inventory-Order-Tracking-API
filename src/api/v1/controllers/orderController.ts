import { Request, Response } from 'express';
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";
import { getAllOrdersService, getOrderByIdService, createOrderService } from '../services/orderService';
import { OrderCreateRequest } from '../models/orderCreateRequestModel';

// get all orders
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await getAllOrdersService();
        
        res.status(HTTP_STATUS.OK).json(successResponse(orders, "Here is the current list of orders."));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the orders.", "GET_ORDERS_ERROR"));
    }
};

//get order by id
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!id || typeof id !== 'string') {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Invalid order ID.", "INVALID_ID_ERROR"));
            return;
        }

        const order = await getOrderByIdService(id);

        if (!order) {
            res.status(HTTP_STATUS.NOT_FOUND).json(errorResponse("Order not found.", "ORDER_NOT_FOUND_ERROR"));
            return;
        }

        res.status(HTTP_STATUS.OK).json(successResponse(order, "Here is the details for the requested order."));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the specific order.", "GET_ORDER_BY_ID_ERROR"));
    }
};

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const requestData: OrderCreateRequest = {
            customerName: req.body.customerName,
            customerPhoneNumber: req.body.customerPhoneNumber,
            platterSize: req.body.platterSize,
            items: req.body.items,
            pickupDate: req.body.pickupDate,
            pickupTime: req.body.pickupTime
        };

        const newOrder = await createOrderService(requestData);

        res.status(HTTP_STATUS.CREATED).json(successResponse(newOrder, "New order created successfully."));

    } catch (error: any) {
        res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse(error.message || "Failed to create order.", "ORDER_CREATION_FAILED"));
    }
};
