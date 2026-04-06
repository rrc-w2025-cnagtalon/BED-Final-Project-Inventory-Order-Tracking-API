import {OrderSlip } from "../models/orderSlipModel";
import { sampleOrderSlips } from "../models/sampleData";
import { OrderCreateRequest } from "../models/orderCreateRequestModel";
import { getKakaninByIdService, updateKakaninService } from "../services/productService"
import { ProductUpdateRequestModel } from "../models/productUpdateRequestModel";
import { OrderUpdateRequestModel } from "../models/orderUpdateRequestModel";

const generateOrderNumber = (): string => {
    const nextNumber = sampleOrderSlips.length + 1;
    return nextNumber.toString().padStart(3, '0');
};

export const getAllOrdersService = async (): Promise<OrderSlip[] | undefined> => {
    return sampleOrderSlips; // Replace with actual database call in the future
};

export const getOrderByIdService = async (id: string): Promise<OrderSlip | undefined> => {
    return sampleOrderSlips.find((order) => order.orderNumber === id); // Replace with actual database call in the future
}

export const createOrderService = async (data: OrderCreateRequest): Promise<OrderSlip | undefined> => {
    const { items, platterSize } = data;

    // max 6 kinds per platter
    if (items.length > 6) {
        throw new Error("A platter can contain a maximum of 6 different kakanin types.");
    }

    // minimum 6 pieces per type
    const hasInvalidQuantity = items.some(item => item.quantity < 6);
    if (hasInvalidQuantity) {
        throw new Error("Each kakanin type in a platter must have at least 6 pieces.");
    }

    // Total items must equal the number of pieces for the platter size
    const totalPieces = items.reduce((sum, item) => sum + item.quantity, 0);
    if (totalPieces !== platterSize) {
        throw new Error(`Total pieces (${totalPieces}) must match the platter size (${platterSize}).`);
    }

    //loops through each item, checks if it exists, checks stock, and takes out quantity if valid.
    for (const item of items) {
        const product = await getKakaninByIdService(item.productId);
        
        if (!product) {
            throw new Error(`"${item.productId}" not found in inventory.`);
        }

        if ((product.currentStock ?? 0) < item.quantity) {
            throw new Error(`Not enough stock for "${product.name}". You requested ${item.quantity}, but only ${product.currentStock} is available.`);
        }

        // take stock out of inventory
        await updateKakaninService(item.productId, {
            currentStock: (product.currentStock ?? 0) - item.quantity
        } as ProductUpdateRequestModel
    );
    }

    const newSlip: OrderSlip = {
        orderNumber: generateOrderNumber(),
        customerName: data.customerName,
        customerPhoneNumber: data.customerPhoneNumber,
        platterSize: data.platterSize,
        items: data.items,
        totalPrice: 1, //price calculation will be added later
        status: "Pending",
        pickupDate: data.pickupDate,
        pickupTime: data.pickupTime,
        createdAt: new Date().toISOString()
    };

    sampleOrderSlips.push(newSlip);
    return newSlip;
};

export const updateOrderService = async (orderNumber: string, data: OrderUpdateRequestModel): Promise<OrderSlip | null> => {
    const index = sampleOrderSlips.findIndex(o => o.orderNumber === orderNumber);
    if (index === -1) return null;
    sampleOrderSlips[index] = { ...sampleOrderSlips[index], ...data };
    return sampleOrderSlips[index]; // Replace with actual database call in the future
};

export const deleteOrderService = async (orderNumber: string): Promise<boolean> => {
    const index = sampleOrderSlips.findIndex((k) => k.orderNumber === orderNumber);
        if (index === -1) {
            return false;
        }
        sampleOrderSlips.splice(index, 1); // Replace with actual database call in the future
        return true;
    }