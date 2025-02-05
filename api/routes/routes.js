import { Router } from "express";
import { classifyApi } from "../controller/controller.js";

const router = Router();

router.get('/classify-api', classifyApi);

export default router;