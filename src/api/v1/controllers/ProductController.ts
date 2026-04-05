import { Request, Response } from 'express';
import { HTTP_STATUS } from "../../../constants/httpConstants"
import { errorResponse, successResponse } from "../models/responseModel"
import { sampleKakanin } from "../models/sampleData";

// import {} from "../services/ProductService";

export const getAllKakanin = async (req: Request, res: Response) => {
    try {
        const kakanin = sampleKakanin; // Replace with actual service call in the future
        
        res.status(HTTP_STATUS.OK).json(successResponse(kakanin));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the kakanin inventory.", "GET_INVENTORY_ERROR"));
    }
};