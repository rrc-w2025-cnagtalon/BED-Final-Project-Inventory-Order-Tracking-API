import { OrderStatus } from './orderModels';

export interface OrderUpdateRequestModel {
    customerName?: string;
    customerPhoneNumber?: string;
    status?: OrderStatus;
    pickupDate?: string;
    pickupTime?: string;
}