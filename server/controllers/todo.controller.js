import { sendResponse } from "../utils/response.util.js";
import List from "../models/list.model.js";

export const createList = async (req, res) => {
  try {
    const { listName } = req.body;
    const { _id: userId } = req.user;

    if (!listName)
      return sendResponse({
        res,
        status: 400,
        message: "provide a valid list name",
      });

    const newList = new List({
      listName,
      createdBy: userId,
    });

    await newList.save();
    return sendResponse({
      res,
      status: 201,
      message: "list created",
      data: newList,
    });
  } catch (error) {
    console.log("Error creating list");
    return sendResponse({ res, status: 500, message: "server error" });
  }
};
