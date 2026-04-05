import { Router } from 'express';
import { getAllKakanin} from "../controllers/ProductController";

const productRoutes = Router();

productRoutes.get("/", getAllKakanin); 

export default productRoutes;