import { AxiosResponse } from "axios";

import { api, ApiEndpoints } from "../api";
import { IUser } from "../models/IUser";

export default class UserService {
  static updateUser(data: IUser): Promise<AxiosResponse<IUser>> {
    return api.put(ApiEndpoints.USERS, data);
  }

  static deleteTask(id: string): Promise<AxiosResponse<IUser>> {
    return api.delete(`${ApiEndpoints.USERS}/${id}`);
  }
}
