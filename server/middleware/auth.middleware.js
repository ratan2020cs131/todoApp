import { sendResponse } from "../utils/response.util.js";
import User from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const { email } = req.headers;
    if (!email)
      return sendResponse({
        res,
        status: 400,
        message: "provide a valid email header",
      });
    const user = await User.findOne({ email });
    if (!user)
      return sendResponse({
        res,
        status: 401,
        message: "user is unauthorized",
      });
    next();
  } catch (error) {
    console.log("Auth error ---> ", error.message);
  }
};
