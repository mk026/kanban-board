import { AxiosResponse } from "axios";

import { api, ApiEndpoints } from "../api";
import { ITask } from "../store/models/Task";

export default class TaskService {
  static getTasks(): Promise<AxiosResponse<ITask[]>> {
    return api.get(ApiEndpoints.TASKS);
  }

  static addTask(data: ITask): Promise<AxiosResponse<ITask>> {
    return api.post(ApiEndpoints.TASKS, data);
  }

  static updateTask(data: ITask): Promise<AxiosResponse<ITask>> {
    return api.put(ApiEndpoints.TASKS, data);
  }

  static deleteTask(id: string): Promise<AxiosResponse<ITask>> {
    return api.delete(`${ApiEndpoints.TASKS}/${id}`);
  }
}
