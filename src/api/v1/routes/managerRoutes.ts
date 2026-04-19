import { Router } from 'express';
import {setUserClaims} from "../controllers/managerController"
import authenticate from '../middleware/authenticate';
import isAuthorized from '../middleware/authorize';

const managerRoutes: Router = Router();

// no roles defined to set up inital manager user
// update this route to be protected by manager role after setting up the initial manager user
managerRoutes.post('/manager/setClaims', authenticate, isAuthorized({hasRole: ["manager"]}), setUserClaims);
export default managerRoutes;