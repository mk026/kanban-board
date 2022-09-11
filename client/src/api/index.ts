import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export enum ApiEndpoints {
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  BOARDS = "/boards",
  BOARD_SECTIONS = "/sections",
  TASKS = "/tasks",
}

export const api = axios.create({ baseURL: BASE_URL });
