import Axios from "../utils/axios.util";

export const postEmail = async (body) => await Axios.post("/user", body);
