import axios from "axios";
import { getToken } from "../service/tokenService";
import { ApiConfig } from "./api-config";


export const api = axios.create({
  baseURL: ApiConfig.baseURL,
  headers: ApiConfig.headers,
  withCredentials: ApiConfig.withCredentials,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status == 401) {
    }
    return Promise.reject(error);
  }
);
