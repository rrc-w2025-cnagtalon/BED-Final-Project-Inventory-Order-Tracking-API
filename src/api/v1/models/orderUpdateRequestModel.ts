import { OrderItem, OrderStatus, PlatterSize } from './orderModels';

export interface OrderUpdateRequestModel {
    customerName?: string;
    customerPhoneNumber?: string;
    status?: OrderStatus;      
    pickupDate?: string;      
    pickupTime?: string;      
    platterSize?: PlatterSize; 
    items?: OrderItem[];       
    totalPrice?: number;     
}