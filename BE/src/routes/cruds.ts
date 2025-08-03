import { Router } from "express";
import { verifyJWT } from "../middleware/middleware";
import { createContent, createLink, fetchContent, getSharedContent, removeContent } from "../controllers/crudscontroller";
const router= Router();

router.post('/content',verifyJWT, createContent)
router.get('/content',verifyJWT,fetchContent)
router.delete('/content/:contentID',verifyJWT,removeContent)
router.post('/brain/share',verifyJWT,createLink)
router.get('/brain/share/:shareLink',getSharedContent)

export default router;