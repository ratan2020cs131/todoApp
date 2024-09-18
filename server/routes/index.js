import { Router } from "express";
import userRoute from "./user.route.js";
import todoRoute from "./todo.route.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { sendResponse } from "../utils/response.util.js";

const indexRoute = Router();

indexRoute.get("/", (req, res) =>
  sendResponse({ res, status: 200, message: "service running" })
);

indexRoute.use(userRoute);
indexRoute.use(authMiddleware, todoRoute);

export default indexRoute;
