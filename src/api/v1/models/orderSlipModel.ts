import { OrderItem, PlatterSize, OrderStatus } from "./orderModels";

export interface OrderSlip {
    orderNumber: string;
    customerName: string;
    customerPhoneNumber: string;
    platterSize: PlatterSize;
    items: OrderItem[]; 
    totalPrice: number; 
    status: OrderStatus;
    pickupDate: string;
    pickupTime: string;
    createdAt: string;
};
