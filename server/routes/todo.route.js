import { Router } from "express";
import {
  createList,
  getAllLists,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/todo.controller.js";
const todoRoute = Router();

todoRoute
  .post("/todo", createList)
  .get("/list", getAllLists)
  .post("/task", createTask)
  .get("/task/:listId", getTasks)
  .patch("/task/:taskId", updateTask)
  .delete("/task/:taskId", deleteTask);

export default todoRoute;
