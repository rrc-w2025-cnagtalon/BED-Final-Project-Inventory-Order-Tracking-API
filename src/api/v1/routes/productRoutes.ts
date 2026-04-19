import { Router } from 'express';
import { getAllKakanin, getKakaninById, createKakanin, updateKakanin, deleteKakanin} from "../controllers/productController";
import authenticate from '../middleware/authenticate';
import isAuthorized from '../middleware/authorize';
import { productSchemas } from '../validation/productSchemas';
import { validateRequest } from '../middleware/validate';

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 
productRoutes.get("/:id", getKakaninById);

productRoutes.post("/", authenticate, isAuthorized({hasRole: ["manager", "employee"]}), validateRequest(productSchemas.create), createKakanin);
productRoutes.put("/:id", authenticate, isAuthorized({hasRole: ["manager", "employee"]}), validateRequest(productSchemas.update), updateKakanin);
productRoutes.delete("/:id", authenticate, isAuthorized({hasRole: ["manager"]}), validateRequest(productSchemas.delete), deleteKakanin);

export default productRoutes;