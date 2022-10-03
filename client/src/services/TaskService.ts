import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { CreateTaskDto, TaskDto, UpdateTaskDto } from "../store/models/Task";

export default class TaskService {
  static getTasks(): Promise<AxiosResponse<TaskDto[]>> {
    return authApi.get(ApiEndpoints.TASKS);
  }

  static addTask(data: CreateTaskDto): Promise<AxiosResponse<TaskDto>> {
    return authApi.post(ApiEndpoints.TASKS, data);
  }

  static updateTask(data: UpdateTaskDto): Promise<AxiosResponse<TaskDto>> {
    return authApi.put(ApiEndpoints.TASKS, data);
  }

  static deleteTask(id: number): Promise<AxiosResponse<TaskDto>> {
    return authApi.delete(`${ApiEndpoints.TASKS}/${id}`);
  }
}
