import { Router } from "express";
import { createList, getAllLists } from "../controllers/todo.controller.js";
const todoRoute = Router();

todoRoute.post("/todo", createList).get("/list", getAllLists);
export default todoRoute;
