export interface ProductCreateRequestModel {
    name: string;
    currentStock: number;
    lowStockThreshold: number;
}