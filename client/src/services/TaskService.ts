import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { CreateTaskDto } from "../store/task/dto/CreateTaskDto";
import { TaskDto } from "../store/task/dto/TaskDto";
import { UpdateTaskDto } from "../store/task/dto/UpdateTaskDto";

export default class TaskService {
  static getTasks(boardId: number): Promise<AxiosResponse<TaskDto[]>> {
    return authApi.get(ApiEndpoints.TASKS, { params: { boardId } });
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
