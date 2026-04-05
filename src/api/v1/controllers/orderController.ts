import { Request, Response } from 'express';
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";
import { getAllOrdersService } from '../services/orderService';

// get all orders
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await getAllOrdersService();
        
        res.status(HTTP_STATUS.OK).json(successResponse([], "Here is the current list of orders."));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the orders.", "GET_ORDERS_ERROR"));
    }
};