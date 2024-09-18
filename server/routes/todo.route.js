import { Router } from "express";
import {
  createList,
  getAllLists,
  getTasks,
  createTask
} from "../controllers/todo.controller.js";
const todoRoute = Router();

todoRoute
  .post("/todo", createList)
  .get("/list", getAllLists)
  .post("/task", createTask)
  .get("/task/:listId", getTasks);
export default todoRoute;
