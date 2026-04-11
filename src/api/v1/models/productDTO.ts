export interface ProductDTO {
    productId: string; 
    name?: string;
    currentStock?: number;
    lowStockThreshold?: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}