import { Router } from "express";
import  { signin,signup } from "../controllers/auth.controller";

const AuthRouter= Router();

AuthRouter.post('/signup',signup)
AuthRouter.post('/signin',signin)

export default AuthRouter;