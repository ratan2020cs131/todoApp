import { Router } from "express";
import { verifyEmail, verifyOtp } from "../controllers/user.controller.js";
const userRoute = Router();

userRoute.post("/user", verifyEmail).patch("/user", verifyOtp);
export default userRoute;
