import {ProductDTO} from "../models/productDTO";
import { sampleKakanin } from "../models/sampleData";
import { ProductCreateRequestModel } from "../models/productCreateRequestModel";
import { ProductUpdateRequestModel } from "../models/productUpdateRequestModel";

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

export const updateKakaninService = async (productId: string, updateData: ProductUpdateRequestModel): Promise<ProductDTO | null> => {
    const index = sampleKakanin.findIndex((k) => k.productId === productId);
    
    if (index === -1) {
        return null;
    }

    const kakaninToUpdate = sampleKakanin[index]; // Replace with actual database call in the future

    if (updateData.name) kakaninToUpdate.name = updateData.name;
    if (updateData.currentStock !== undefined) kakaninToUpdate.currentStock = updateData.currentStock;
    if (updateData.lowStockThreshold !== undefined) kakaninToUpdate.lowStockThreshold = updateData.lowStockThreshold;
    if (updateData.isActive !== undefined) kakaninToUpdate.isActive = updateData.isActive;

    return kakaninToUpdate;
};

export const deleteKakaninService = async (productId: string): Promise<boolean> => {
    const index = sampleKakanin.findIndex((k) => k.productId === productId);
    if (index === -1) {
        return false;
    }
    sampleKakanin.splice(index, 1); // Replace with actual database call in the future
    return true;
}

