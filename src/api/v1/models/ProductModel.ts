export interface Product {
  productId: string;
  name: string;
  currentStock: number;
  lowStockThreshold: number;
  isActive: boolean;
}