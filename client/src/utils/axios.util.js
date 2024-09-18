import axios from "axios";
import { STORAGE_KEYS, useGetStorageItem } from "../hooks/useStorage";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
Axios.interceptors.request.use(
  (config) => {
    config.headers["email"] = useGetStorageItem({ key: STORAGE_KEYS.email });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
