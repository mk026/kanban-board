import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import { UpdateUserDto } from "../store/user/dto/UpdateUserDto";
import { UserDto } from "../store/user/dto/UserDto";

export default class UserService {
  static updateUser(data: UpdateUserDto): Promise<AxiosResponse<UserDto>> {
    return authApi.put(ApiEndpoints.USERS, data);
  }

  static deleteUser(id: string): Promise<AxiosResponse<UserDto>> {
    return authApi.delete(`${ApiEndpoints.USERS}/${id}`);
  }
}
