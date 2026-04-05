import {ProductDTO} from "../models/productDTO";
import { ProductCreateRequestModel } from "../models/productCreateRequestModel";
import { sampleKakanin } from "../models/sampleData";

export const getAllKakaninService = async (): Promise<Array<ProductDTO> | undefined> => {
        return sampleKakanin; // Replace with actual database call in the future
};

export const getKakaninByIdService = async (id: string): Promise<ProductDTO | undefined> => {
        return sampleKakanin.find((k) => k.productId === id); // Replace with actual database call in the future
};

export const createKakaninService = async (data: ProductCreateRequestModel): Promise<ProductDTO> => {
    const newKakanin: ProductDTO = {
        productId: data.name.toLowerCase().replace(/\s+/g, '-'),
        name: data.name,
        currentStock: data.currentStock,
        lowStockThreshold: data.lowStockThreshold,
        isActive: data.isActive ?? true 
    };

    sampleKakanin.push(newKakanin);
    return newKakanin; // Replace with actual database call in the future
};