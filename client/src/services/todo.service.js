import Axios from "../utils/axios.util";

export const createList = async (body) => await Axios.post("/todo", body);
