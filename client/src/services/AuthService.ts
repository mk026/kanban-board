import { AxiosResponse } from "axios";

import { api, authApi } from "../api";
import { config } from "../config";
import { AuthResponse } from "../types";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";

export default class AuthService {
  static tokenKey = "token";

  static signup(data: SignupFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(config.signupUrl, data);
  }

  static signin(data: SigninFormValues): Promise<AxiosResponse<AuthResponse>> {
    return api.post(config.signinUrl, data);
  }

  static getStoredToken() {
    return localStorage.getItem(AuthService.tokenKey);
  }

  static storeToken(token: string) {
    localStorage.setItem(AuthService.tokenKey, token);
  }

  static removeStoredToken() {
    localStorage.removeItem(AuthService.tokenKey);
  }

  static checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return authApi.get(config.checkAuthUrl);
  }
}
