import { Router } from 'express';
import { getAllKakanin, getKakaninById, createKakanin} from "../controllers/productController";

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 
productRoutes.get("/:id", getKakaninById);
productRoutes.post("/", createKakanin);

export default productRoutes;