import { Router } from 'express';
import { getAllKakanin} from "../controllers/ProductController";

const kakaninRoutes = Router();

kakaninRoutes.get("/", getAllKakanin); 

export default kakaninRoutes;