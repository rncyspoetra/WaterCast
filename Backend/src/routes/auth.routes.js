import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { isLogin } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// LOGIN
router.post("/login", authController.login);

// GET ME
router.get("/me", isLogin, authController.getMe);

// LOGOUT
router.delete("/logout", authController.logout);

// Refresh Token
router.post("/refresh-token", authController.refreshAccessToken);

export default router;
