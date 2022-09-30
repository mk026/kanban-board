import { makeAutoObservable, runInAction } from "mobx";
import AuthService from "../services/AuthService";
import { SigninFormValues } from "../validation/signinValidation";
import { SignupFormValues } from "../validation/signupValidation";
import { RootStore } from "./RootStore";

export class AuthStore {
  isAuth: boolean = false;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async signup(data: SignupFormValues) {
    try {
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
        console.log(error);
      });
    }
  }

  async signin(data: SigninFormValues) {
    try {
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
        console.log(error);
      });
    }
  }
}
