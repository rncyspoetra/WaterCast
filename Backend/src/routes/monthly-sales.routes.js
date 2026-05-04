import express from "express";
import { isLogin } from "../middlewares/auth.middlewares.js";
import * as monthlySalesController from "../controllers/monthly-sales.controller.js";

const router = express.Router();

// GET ALL MONTHLY SALES
router.get("/", isLogin, monthlySalesController.getAllMonthlySales);

// GET MONTHLY SALES BY ID
router.get("/:id", isLogin, monthlySalesController.getMonthlySalesById);

// CREATE NEW MONTHLY SALES
router.post("/", isLogin, monthlySalesController.createMonthlySales);

// UPDATE MONTHLY SALES
router.patch("/:id", isLogin, monthlySalesController.updateMonthlySales);

// DELETE MONTHLY SALES
router.delete("/:id", isLogin, monthlySalesController.deleteMonthlySales);

export default router;
