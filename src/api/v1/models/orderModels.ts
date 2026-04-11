export interface OrderItem {
    productId: string;
    quantity: number;
}

export type PlatterSize = 12 | 36 | 50 | 75 | 100;

export type OrderStatus = "Pending" | "Confirmed" | "Ready for Pickup" | "Completed" | "Cancelled";
