export interface ProductUpdateRequestModel {
    name: string;
    currentStock: number;
    lowStockThreshold: number;
    isActive: boolean;
}