import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { ITask } from "../store/models/Task";

export default class TaskService {
  static getTasks(): Promise<AxiosResponse<ITask[]>> {
    return authApi.get(ApiEndpoints.TASKS);
  }

  static addTask(data: ITask): Promise<AxiosResponse<ITask>> {
    return authApi.post(ApiEndpoints.TASKS, data);
  }

  static updateTask(data: ITask): Promise<AxiosResponse<ITask>> {
    return authApi.put(ApiEndpoints.TASKS, data);
  }

  static deleteTask(id: string): Promise<AxiosResponse<ITask>> {
    return authApi.delete(`${ApiEndpoints.TASKS}/${id}`);
  }
}
