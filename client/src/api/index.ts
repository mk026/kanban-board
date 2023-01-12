import axios, { AxiosRequestConfig } from "axios";

import { config } from "../config";
import AuthService from "../services/AuthService";

export const api = axios.create({ baseURL: config.baseUrl });

export const authApi = axios.create({ baseURL: config.baseUrl });

const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${AuthService.getStoredToken()}`;
  return config;
};

authApi.interceptors.request.use(authInterceptor);
