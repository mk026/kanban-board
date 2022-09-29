import { AxiosResponse } from "axios";

import { api, ApiEndpoints } from "../api";
import { IUser } from "../models/IUser";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";

export interface AuthResponse {
  user: IUser;
}

export default class AuthService {
  static signup(data: SignupFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(ApiEndpoints.SIGNUP, data);
  }

  static signin(data: SigninFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(ApiEndpoints.SIGNIN, data);
  }

  static getStoredToken() {
    return localStorage.getItem("token");
  }
}
