import { sendResponse } from "../utils/response.util.js";
import List from "../models/list.model.js";
import Task from "../models/task.model.js";

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

export const getAllLists = async (req, res) => {
  try {
    const lists = await List.find({ createdBy: req.user._id }).populate(
      "createdBy"
    );
    return sendResponse({
      res,
      status: 200,
      message: "lists fetched",
      data: lists,
    });
  } catch (error) {
    console.log("Error fetching lists ---> ", error.message);
    return sendResponse({ res, status: 500, message: "server error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { listId, taskName } = req.body;
    if (!listId || !(await List.findById({ _id: listId })) || !taskName)
      return sendResponse({ res, status: 400, message: "invalid parameters" });
    const task = new Task({
      taskName,
      status: "pending",
      listId,
    });
    await task.save();
    return sendResponse({
      res,
      status: 201,
      message: "tasks created",
      data: task,
    });
  } catch (error) {
    console.log("Error creating tasks ---> ", error.message);
    return sendResponse({ res, status: 500, message: "server error" });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { listId } = req.params;
    if (!listId)
      return sendResponse({ res, status: 400, message: "invalid list Id" });
    const tasks = await Task.find({ listId });
    return sendResponse({
      res,
      status: 200,
      message: "tasks fetched",
      data: tasks,
    });
  } catch (error) {
    console.log("Error fetching tasks ---> ", error.message);
    return sendResponse({ res, status: 500, message: "server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { status } = req.body;
    const { taskId } = req.params;
    if (!taskId || !status)
      return sendResponse({ res, status: 400, message: "invalid parameters" });

    const task = await Task.findByIdAndUpdate(
      taskId,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );
    return sendResponse({
      res,
      status: 201,
      message: "task updated",
      data: task,
    });
  } catch (error) {
    console.log("Erorr updating task ---> ", error.message);
    return sendResponse({ res, status: 500, message: "server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { status } = req.body;
    const { taskId } = req.params;
    if (!taskId || !status)
      return sendResponse({ res, status: 400, message: "invalid parameters" });

    await Task.findByIdAndDelete(taskId);
    return sendResponse({
      res,
      status: 204,
      message: "task deleted",
    });
  } catch (error) {
    console.log("Erorr updating task ---> ", error.message);
    return sendResponse({ res, status: 500, message: "server error" });
  }
};
