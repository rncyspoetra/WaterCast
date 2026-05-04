import express from "express";
import * as usersController from "../controllers/users.controller.js";
import { adminOnly, isLogin } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// GET ALL USERS
router.get("/", isLogin, adminOnly, usersController.getAllUsers);

// GET USER BY ID
router.get("/:id", isLogin, adminOnly, usersController.getUserById);

// CREATE NEW USER
router.post("/", isLogin, adminOnly, usersController.createNewUser);

// UPDATE USER
router.patch("/:id", isLogin, adminOnly, usersController.updateUser);

// DELETE USER
router.delete("/:id", isLogin, adminOnly, usersController.deleteUser);

export default router;
