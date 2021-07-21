import { Router, Request, Response, NextFunction } from 'express';
import { isLogged } from '../middlewares/IsLogged';

const router = Router();

router.get('/login', isLogged,(req: Request, res: Response)=>{
    
});

export default router;