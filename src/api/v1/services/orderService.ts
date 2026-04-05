import {OrderSlip } from "../models/orderSlipModel";
import { sampleOrderSlips } from "../models/sampleData";

export const getAllOrdersService = async (): Promise<OrderSlip[] | undefined> => {
    return sampleOrderSlips; // Replace with actual database call in the future
};

export const getOrderByIdService = async (id: string): Promise<OrderSlip | undefined> => {
    return sampleOrderSlips.find((order) => order.orderNumber === id); // Replace with actual database call in the future
}
