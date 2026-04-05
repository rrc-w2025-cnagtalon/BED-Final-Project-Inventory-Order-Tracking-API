export interface ProductCreateRequestModel { 
    productId: string;
    name: string;
    currentStock: number;
    lowStockThreshold: number;
    isActive: boolean;
}