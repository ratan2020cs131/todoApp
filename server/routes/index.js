import { Router } from "express";
import userRoute from "./user.route.js";
import todoRoute from "./todo.route.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const indexRoute = Router();

indexRoute
  .use(authMiddleware, userRoute)
  .use(todoRoute)
  .get("/", (req, res) =>
    res.status(200).json({
      message: "service is running",
    })
  );

export default indexRoute;
