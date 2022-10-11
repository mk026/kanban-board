import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { SigninFormValues } from "../../validation/signinValidation";
import { SignupFormValues } from "../../validation/signupValidation";
import AuthService from "../../services/AuthService";

export class AuthStore {
  isAuth: boolean = false;
  isLoading: boolean = false;
  error: unknown = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async signup(data: SignupFormValues) {
    try {
      this.isLoading = true;
      const {
        data: { user, token },
      } = await AuthService.signup(data);
      runInAction(() => {
        AuthService.storeToken(token);
        this.rootStore.userStore.setUser(user);
        this.isAuth = true;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async signin(data: SigninFormValues) {
    try {
      this.isLoading = true;
      const {
        data: { user, token },
      } = await AuthService.signin(data);
      runInAction(() => {
        AuthService.storeToken(token);
        this.rootStore.userStore.setUser(user);
        this.isAuth = true;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async checkAuth() {
    try {
      this.isLoading = true;
      const {
        data: { user, token },
      } = await AuthService.checkAuth();
      runInAction(() => {
        AuthService.storeToken(token);
        this.rootStore.userStore.setUser(user);
        this.isAuth = true;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        console.log(error);
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async signout() {
    AuthService.removeStoredToken();
    this.isAuth = false;
    this.rootStore.userStore.user = null;
  }
}
