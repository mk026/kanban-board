import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { UpdateUserDto } from "../store/user/dto/UpdateUserDto";
import { UserDto } from "../store/user/dto/UserDto";
import { UpdatePasswordFormValues } from "../validation/updatePasswordValidation";

export default class UserService {
  static updateUser(data: UpdateUserDto): Promise<AxiosResponse<UserDto>> {
    return authApi.put(ApiEndpoints.USERS, data);
  }

  static updatePassword(
    data: UpdatePasswordFormValues
  ): Promise<AxiosResponse<UserDto>> {
    return authApi.put(ApiEndpoints.PASSWORD_UPDATE, data);
  }

  static deleteUser(id: number): Promise<AxiosResponse<UserDto>> {
    return authApi.delete(`${ApiEndpoints.USERS}/${id}`);
  }
}
