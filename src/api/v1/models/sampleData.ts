import { Product } from '../models/ProductModel';

/**
 * Mock data representing the initial kakanin inventory.
 */
export const sampleKakanin: Product[] = [
  {
    productId: 'royal-bibingka',
    name: 'Royal Bibingka',
    currentStock: 200,
    lowStockThreshold: 50,
    isActive: true
  },
  {
    productId: 'pichi-pichi',
    name: 'Pichi-Pichi',
    currentStock: 100,
    lowStockThreshold: 50,
    isActive: true
  },
  {
    productId: 'sapin-sapin',
    name: 'Sapin-Sapin',
    currentStock: 200,
    lowStockThreshold: 50,
    isActive: true
  },
  {
    productId: 'kutsinta',
    name: 'Kutsinta',
    currentStock: 150,
    lowStockThreshold: 50,
    isActive: true
  }
];