import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { UpdateUserDto, UserResponse } from "../types";
import { UpdatePasswordFormValues } from "../validation/updatePasswordValidation";

export default class UserService {
  static updateUser(data: UpdateUserDto): Promise<AxiosResponse<UserResponse>> {
    return authApi.put(ApiEndpoints.USERS, data);
  }

  static updatePassword(
    data: UpdatePasswordFormValues
  ): Promise<AxiosResponse<UserResponse>> {
    return authApi.put(ApiEndpoints.PASSWORD_UPDATE, data);
  }

  static deleteUser(id: number): Promise<AxiosResponse<UserResponse>> {
    return authApi.delete(`${ApiEndpoints.USERS}/${id}`);
  }
}
