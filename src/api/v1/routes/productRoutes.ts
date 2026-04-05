import { Router } from 'express';
import { getAllKakanin, getKakaninById} from "../controllers/ProductController";

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 
productRoutes.get("/:id", getKakaninById);

export default productRoutes;