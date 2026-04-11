import { OrderItem, PlatterSize } from "./orderModels";

export interface OrderCreateRequest {
    customerName: string;
    customerPhoneNumber: string;
    platterSize: PlatterSize;
    items: OrderItem[];
    pickupDate: string;
    pickupTime: string;
    totalPrice?: number;
    status: "Pending"; 
    createdAt?: Date;
    updatedAt?: Date;
}