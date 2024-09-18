import Axios from "../utils/axios.util";

export const postEmail = async (body) => await Axios.post("/user", body);
export const verifyOtp = async (body) => await Axios.patch("/user", body);
