import { Response, Request, NextFunction } from 'express';
import {  } from '../models/Users'; 

export const isLogged = (req: Request, res: Response, next: NextFunction) =>{
    const user: String = req.body.user;
    
}