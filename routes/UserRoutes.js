import { Router } from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";
import { userValidator } from "../middlewares/authmiddleware.js";

const UserRoutes = Router();

UserRoutes.post("/register", userValidator,registerUser);
UserRoutes.post("/login", userValidator, loginUser);

UserRoutes.get("/", getAllUsers);
UserRoutes.get("/:id", getUserById);

UserRoutes.put("/:id", updateUser);
UserRoutes.delete("/:id", deleteUser);

export default UserRoutes;