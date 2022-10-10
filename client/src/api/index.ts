import axios, { AxiosRequestConfig } from "axios";

import AuthService from "../services/AuthService";

export const BASE_URL = "http://localhost:8080";

export enum ApiEndpoints {
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  CHECK_AUTH = "/check_auth",
  USERS = "/users",
  BOARDS = "/boards",
  BOARD_SECTIONS = "/sections",
  TASKS = "/tasks",
}

export const api = axios.create({ baseURL: BASE_URL });

export const authApi = axios.create({ baseURL: BASE_URL });

const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${AuthService.getStoredToken()}`;
  return config;
};

authApi.interceptors.request.use(authInterceptor);
