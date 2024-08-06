import axios from "axios";
import { API_URL } from "@configs/environment";
import { setupInterceptors } from "./interceptors";

export const apiV1 = axios.create({
  baseURL: "https://gpda-voting-system-auth-test.up.railway.app/",
  withCredentials: true,
});

export const apiCEP = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const apiSpaceX = axios.create({
  baseURL: "https://api.spacexdata.com/v3/",
});

setupInterceptors(apiV1);
