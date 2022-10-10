import { AxiosResponse } from "axios";

import { api, ApiEndpoints, authApi } from "../api";
import { UserDto } from "../store/user/dto/UserDto";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";

export interface AuthResponse {
  user: UserDto;
  token: string;
}

export default class AuthService {
  static tokenKey = "token";

  static signup(data: SignupFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(ApiEndpoints.SIGNUP, data);
  }

  static signin(data: SigninFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(ApiEndpoints.SIGNIN, data);
  }

  static getStoredToken() {
    return localStorage.getItem(AuthService.tokenKey);
  }

  static storeToken(token: string) {
    localStorage.setItem(AuthService.tokenKey, token);
  }

  static checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return authApi.get(ApiEndpoints.CHECK_AUTH);
  }
}
