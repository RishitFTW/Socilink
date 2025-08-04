import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY as string

interface JWTPayload {
  userId: string;
}

export function generateJWT(userId: string): string {
  return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "1h" });
}

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JWTPayload;
    (req as any).userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
}
