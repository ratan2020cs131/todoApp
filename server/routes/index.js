import { Router } from "express";
import userRoute from './user.route.js'
const indexRoute = Router();

indexRoute.get("/", (req, res) =>
  res.status(200).json({
    message: "service is running",
  })
).use(userRoute);
export default indexRoute;
