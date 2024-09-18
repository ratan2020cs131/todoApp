import Axios from "../utils/axios.util";

export const createList = async (body) => await Axios.post("/todo", body);
export const getAllLists = async () => await Axios.get("/list");
export const createTasks = async (body) => await Axios.post(`/task`, body);
export const getTasks = async (listId) => await Axios.get(`/task/${listId}`);
