import Axios from "../utils/axios.util";

export const createList = async (body) => await Axios.post("/todo", body);
export const getAllLists = async () => await Axios.get("/list");
export const createTasks = async (body) => await Axios.post(`/task`, body);
export const getTasks = async (listId) => await Axios.get(`/task/${listId}`);
export const updateTask = async (taskId, body) =>
  await Axios.patch(`/task/${taskId}`, body);
export const deleteTask = async (taskId) =>
  await Axios.delete(`/task/${taskId}`);
