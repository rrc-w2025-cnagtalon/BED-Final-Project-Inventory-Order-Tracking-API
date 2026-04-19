import { Router } from 'express';
import { getAllKakanin, getKakaninById, createKakanin, updateKakanin, deleteKakanin} from "../controllers/productController";
import authenticate from '../middleware/authenticate';
import isAuthorized from '../middleware/authorize';

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 
productRoutes.get("/:id", getKakaninById);

productRoutes.post("/", authenticate, isAuthorized({hasRole: ["manager", "employee"]}), createKakanin);
productRoutes.put("/:id", authenticate, isAuthorized({hasRole: ["manager", "employee"]}), updateKakanin);
productRoutes.delete("/:id", authenticate, isAuthorized({hasRole: ["manager"]}), deleteKakanin);

export default productRoutes;