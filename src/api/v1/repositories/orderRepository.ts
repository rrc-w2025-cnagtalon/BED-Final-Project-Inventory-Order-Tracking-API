import { db } from "../../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { OrderSlip } from "../models/orderSlipModel";
import { OrderCreateRequest } from "../models/orderCreateRequestModel";
import { OrderUpdateRequestModel } from "../models/orderUpdateRequestModel"; 

export const addDocument = async (order: OrderCreateRequest, orderNumber: string): Promise<string> => {
    const docRef: DocumentReference = db.collection("orders").doc();

    const orderEntity: OrderSlip = {
        orderNumber: orderNumber,
        customerName: order.customerName,
        customerPhoneNumber: order.customerPhoneNumber,
        platterSize: order.platterSize,
        items: order.items,
        totalPrice: order.totalPrice ?? 0,
        status: order.status,
        pickupDate: order.pickupDate,
        pickupTime: order.pickupTime,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await docRef.set(orderEntity);
    return docRef.id;
};

