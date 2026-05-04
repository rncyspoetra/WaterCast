import express from "express";
import { isLogin } from "../middlewares/auth.middlewares.js";
import * as dailySalesController from "../controllers/daily-sales.controller.js";

const router = express.Router();

// GET ALL DAILY SALES
router.get("/", isLogin, dailySalesController.getAllDailySales);

// GET DAILY SALES BY ID
router.get("/:id", isLogin, dailySalesController.getDailySalesById);

// CREATE NEW DAILY SALES
router.post("/", isLogin, dailySalesController.createDailySales);

// UPDATE DAILY SALES
router.patch("/:id", isLogin, dailySalesController.updateDailySales);

// DELETE DAILY SALES
router.delete("/:id", isLogin, dailySalesController.deleteDailySales);

export default router;
