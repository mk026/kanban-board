import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { CreateTaskDto, TaskResponse, UpdateTaskDto } from "../types";

export default class TaskService {
  static getTasks(boardId: number): Promise<AxiosResponse<TaskResponse[]>> {
    return authApi.get(ApiEndpoints.TASKS, { params: { boardId } });
  }

  static addTask(data: CreateTaskDto): Promise<AxiosResponse<TaskResponse>> {
    return authApi.post(ApiEndpoints.TASKS, data);
  }

  static updateTask(data: UpdateTaskDto): Promise<AxiosResponse<TaskResponse>> {
    return authApi.put(ApiEndpoints.TASKS, data);
  }

  static deleteTask(id: number): Promise<AxiosResponse<TaskResponse>> {
    return authApi.delete(`${ApiEndpoints.TASKS}/${id}`);
  }
}
