import express from "express";
import * as dashboardController from "../controllers/dashboard.controller.js";
import { isLogin } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", isLogin, dashboardController.getDashboardData);

export default router;
