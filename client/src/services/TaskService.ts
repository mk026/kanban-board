import { AxiosResponse } from "axios";

import { authApi } from "../api";
import { config } from "../config";
import { CreateTaskDto, TaskResponse, UpdateTaskDto } from "../types/taskTypes";

export default class TaskService {
  static getTasks(boardId: number): Promise<AxiosResponse<TaskResponse[]>> {
    return authApi.get(config.tasksUrl, { params: { boardId } });
  }

  static addTask(data: CreateTaskDto): Promise<AxiosResponse<TaskResponse>> {
    return authApi.post(config.tasksUrl, data);
  }

  static updateTask(
    id: number,
    data: UpdateTaskDto
  ): Promise<AxiosResponse<TaskResponse>> {
    return authApi.put(`${config.tasksUrl}/${id}`, data);
  }

  static deleteTask(id: number): Promise<AxiosResponse<TaskResponse>> {
    return authApi.delete(`${config.tasksUrl}/${id}`);
  }
}
