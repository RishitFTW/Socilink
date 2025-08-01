import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY= "1234567"

interface JWTPayload{
    userId:string
}

export function generateJWT(userId:string){
    return jwt.sign({userId},SECRET_KEY,{ expiresIn: "1h" });
}

export function verifyJWT(req:Request,res:Response,next:NextFunction){
    const authorization= req.headers.authorization;
    if(!authorization){
         res.status(401).json({message:"unauthorized"});
         return;        
    }
    const token=authorization.split(' ')[1];
    try {
        const decoded= jwt.verify(token,SECRET_KEY) as JWTPayload
        (req as any).userId = decoded.userId;
        next();
    } catch (error) {
         res.status(401).json({error: 'Invalid Token'});
         return;        
    }
}