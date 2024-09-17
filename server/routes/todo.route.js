import { Router } from "express";
import { createList } from "../controllers/todo.controller.js";
const todoRoute = Router();

todoRoute.post("/todo", createList);
export default todoRoute;
