import axios from "axios";
import { API_URL } from "@configs/environment";
import { setupInterceptors } from "./interceptors";

export const apiV1 = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const apiSpaceX = axios.create({
  baseURL: "https://api.spacexdata.com/v3/",
});

setupInterceptors(apiV1);
