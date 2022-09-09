import { AxiosResponse } from "axios";

import { api } from "../api";
import { IUser } from "../models/IUser";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";

export interface AuthResponse {
  user: IUser;
}

export default class AuthService {
  static signup(data: SignupFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/signup", data);
  }

  static signin(data: SigninFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post("/signin", data);
  }
}
