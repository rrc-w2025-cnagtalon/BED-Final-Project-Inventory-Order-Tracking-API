import { Router } from 'express';
import { getAllKakanin, getKakaninById, createKakanin, updateKakanin, deleteKakanin} from "../controllers/productController";

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 
productRoutes.get("/:id", getKakaninById);
productRoutes.post("/", createKakanin);
productRoutes.put("/:id", updateKakanin);
productRoutes.delete("/:id", deleteKakanin);

export default productRoutes;