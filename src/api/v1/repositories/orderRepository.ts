import { db } from "../../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { OrderSlip } from "../models/orderSlipModel";
import { OrderCreateRequest } from "../models/orderCreateRequestModel";
import { OrderUpdateRequestModel } from "../models/orderUpdateRequestModel"; 
import { ProductDTO } from "../models/productDTO";

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

export const getDocumentById = async (id: string): Promise<OrderSlip | undefined> => {
    // Create a reference to a specific document in the 'orders' collection
    const docRef: DocumentReference = db.collection("orders").doc(id);

    // Use the `get()` method to retrieve the document
    const doc = await docRef.get();

    // Check if the document exists
    if (doc.exists) {
        // `doc.data()` returns an object with all fields in the document
        let data = doc.data();

        return {
            orderNumber: data?.orderNumber,
            customerName: data?.customerName,
            customerPhoneNumber: data?.customerPhoneNumber,
            platterSize: data?.platterSize,
            items: data?.items,
            totalPrice: data?.totalPrice,
            status: data?.status,
            pickupDate: data?.pickupDate,
            pickupTime: data?.pickupTime,
            createdAt: data?.createdAt,
            updatedAt: data?.updatedAt,
        } as OrderSlip;
    } else {
        console.log("No order found with the given ID!");
    }
};

export const getCollection = async (): Promise<Array<OrderSlip> | undefined> => {
    // Retrieve all documents from the 'orders' collection
    // `get()` returns a QuerySnapshot containing all documents in the collection
    const snapshot: QuerySnapshot = await db.collection("orders").get();

    const orders: OrderSlip[] = []

    // Iterate through each document in the collection
    snapshot.forEach((doc) => {
        // `doc.data()` returns an object with all fields in the document
        let data = doc.data()
        orders.push({
            orderNumber: data!.id,
            customerName: data!.name,
            customerPhoneNumber: data!.currentStock,
            platterSize: data!.platterSize,
            items: data!.items,
            totalPrice: data!.totalPrice,
            status: data!.status,
            pickupDate: data!.pickupDate,
            pickupTime: data!.pickupTime,
            createdAt: data!.createdAt,
            updatedAt: data!.updatedAt
        });
    });

    return orders;
};