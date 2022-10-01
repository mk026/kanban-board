import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { IUser } from "../store/models/User";

export default class UserService {
  static updateUser(data: IUser): Promise<AxiosResponse<IUser>> {
    return authApi.put(ApiEndpoints.USERS, data);
  }

  static deleteTask(id: string): Promise<AxiosResponse<IUser>> {
    return authApi.delete(`${ApiEndpoints.USERS}/${id}`);
  }
}
