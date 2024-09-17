import { Router } from "express";
import { verifyEmail } from "../controllers/user.controller.js";
const userRoute = Router();

userRoute.post("/user", verifyEmail);
export default userRoute;
