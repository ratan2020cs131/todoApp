import { Router } from "express";
import {
  verifyEmail,
  verifyOtp,
  authUser,
} from "../controllers/user.controller.js";
const userRoute = Router();

userRoute
  .post("/user", verifyEmail)
  .patch("/user", verifyOtp)
  .post("/auth", authUser);
export default userRoute;
