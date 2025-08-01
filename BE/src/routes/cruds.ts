import { Router } from "express";
import { verifyJWT } from "../middleware/middleware";
const AuthRouter= Router();

AuthRouter.post('/content',verifyJWT)
AuthRouter.get('/content',verifyJWT)
AuthRouter.delete('/content/:id',verifyJWT)
AuthRouter.post('brain/share',verifyJWT)
AuthRouter.get('/brain/share/:shareLink',verifyJWT)

export default AuthRouter;