import { Router } from 'express';
import {setUserClaims} from "../controllers/managerController"

const managerRoutes: Router = Router();

// no roles defined to set up inital manager user
// update this route to be protected by manager role after setting up the initial manager user
managerRoutes.post('/manager/setClaims', setUserClaims);
export default managerRoutes;