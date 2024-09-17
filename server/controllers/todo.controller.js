import { sendResponse } from "../utils/response.util.js";
import List from '../models/list.model.js'

export const createList = async (req, res) => {
  try {
    return sendResponse({ res, status: 200, message: "list ok" });
  } catch (error) {
    console.log("Error creating list");
    return sendResponse({ res, status: 500, message: "server error" });
  }
};
