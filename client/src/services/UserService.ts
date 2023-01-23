import { AxiosResponse } from "axios";

import { authApi } from "../api";
import { config } from "../config";
import {
  UpdatePasswordDto,
  UpdateUserDto,
  UserResponse,
} from "../types/userTypes";

export default class UserService {
  static updateUser(data: UpdateUserDto): Promise<AxiosResponse<UserResponse>> {
    return authApi.put(config.usersUrl, data);
  }

  static updatePassword(
    data: UpdatePasswordDto
  ): Promise<AxiosResponse<UserResponse>> {
    return authApi.put(config.passwordUpdateUrl, data);
  }

  static deleteUser(id: number): Promise<AxiosResponse<UserResponse>> {
    return authApi.delete(`${config.usersUrl}/${id}`);
  }
}
