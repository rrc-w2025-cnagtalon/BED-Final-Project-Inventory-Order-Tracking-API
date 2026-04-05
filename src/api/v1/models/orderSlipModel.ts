import { OrderItem, PlatterSize, OrderStatus } from "./orderModels";

export interface OrderSlip {
    orderId: string;
    customerName: string;
    customerPhone: string;
    platterSize: PlatterSize;
    items: OrderItem[]; 
    totalPrice: number; 
    status: OrderStatus;
    pickupDate: string;  
    createdAt: string;
};
