import express from "express";
import * as predictController from "../controllers/predict.controller.js";
import { adminOnly, isLogin } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", isLogin, adminOnly, predictController.getPredictData);

router.post("/generate", isLogin, adminOnly, predictController.createPredict);

export default router;
