import { Request, Response } from 'express';
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { errorResponse, successResponse } from "../models/responseModel";
import { sampleKakanin } from "../models/sampleData";
import { ProductCreateRequestModel } from "../models/productCreateRequestModel";

// import {} from "../services/ProductService";

export const getAllKakanin = async (req: Request, res: Response) => {
    try {
        const kakanin = sampleKakanin; // Replace with actual service call in the future
        
        res.status(HTTP_STATUS.OK).json(successResponse(kakanin));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the kakanin inventory.", "GET_INVENTORY_ERROR"));
    }
};

export const getKakaninById = async (req: Request, res: Response): Promise<void | undefined> => {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse("Invalid kakanin ID.", "INVALID_ID_ERROR"));
            return;
        }
        // Replace with actual service call in the future
        const kakanin = sampleKakanin.find((k) => k.productId === id);

        if (!kakanin) {
            res.status(HTTP_STATUS.NOT_FOUND).json(errorResponse("Kakanin not found.", "KAKANIN_NOT_FOUND_ERROR"));
            return;
        }

        res.status(HTTP_STATUS.OK).json(successResponse(kakanin, "Here is the current inventory for the requested kakanin."));
    } catch (error) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(errorResponse("Something went wrong getting the specific kakanin.", "GET_KAKANIN_BY_ID_ERROR"));
    }
};

export const createKakanin = async (req: Request, res: Response) => {

    const {name, currentStock, lowStockThreshold} = req.body;

    const newKakanin: ProductCreateRequestModel = {
        productId: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        currentStock,
        lowStockThreshold,
        isActive: true
    };

    sampleKakanin.push(newKakanin);
    res.status(HTTP_STATUS.CREATED).json(successResponse(newKakanin, "New kakanin created successfully."));
};
