export interface ProductResponse {
    productId: string | undefined;
    name: string | undefined;             
    currentStock: number | undefined;     
    lowStockThreshold: number | undefined; 
    isActive: boolean | undefined;        
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}