import { Router } from "express";
import  { signin,signup } from "../controllers/auth.controller";

const router= Router();

router.post('/signup',signin)
router.post('/signin',signup)

export default router;