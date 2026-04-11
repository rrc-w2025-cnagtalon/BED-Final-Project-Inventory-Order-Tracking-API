import { db } from "../../../config/firebaseConfig";
import { DocumentReference, QuerySnapshot } from "firebase-admin/firestore";
import { Product } from "../models/productModel";
import { ProductCreateRequestModel } from "../models/productCreateRequestModel";
import { ProductDTO } from "../models/productDTO";

export const addDocument = async (product: ProductCreateRequestModel): Promise<string> => {
    const productId = product.name!.toLowerCase().replace(/\s+/g, '-');
    // Create a reference to a document in the 'products' collection with ID 'productId'
    // If the document doesn't exist, it will be created
    const docRef: DocumentReference = db.collection("products").doc(productId);

    // Use the `set` method to add or overwrite data in the document
    // The data is passed as an object with fields and their values
    const productEntity: ProductDTO = {
        productId: productId,
        name: product.name,
        currentStock: product.currentStock,
        lowStockThreshold: product.lowStockThreshold,
        isActive: product.isActive,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    await docRef.set(productEntity);
    return docRef.id;
};      
