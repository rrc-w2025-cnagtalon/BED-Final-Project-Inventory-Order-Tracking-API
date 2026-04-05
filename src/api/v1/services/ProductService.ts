import {ProductDTO} from "../models/productDTO";
import { ProductCreateRequestModel } from "../models/productCreateRequestModel";
import { sampleKakanin } from "../models/sampleData";

export const getAllKakaninService = async (): Promise<Array<ProductDTO> | undefined> => {
        return sampleKakanin; // Replace with actual database call in the future
};

export const getKakaninByIdService = async (id: string): Promise<ProductDTO | undefined> => {
        return sampleKakanin.find((k) => k.productId === id); // Replace with actual database call in the future
};

export const createKakaninService = async (newKakanin: ProductCreateRequestModel): Promise<ProductDTO> => {
    newKakanin.productId = newKakanin.name.toLowerCase().replace(/\s+/g, '-'); 
    sampleKakanin.push(newKakanin);
    return newKakanin; // Replace with actual database call in the future
};