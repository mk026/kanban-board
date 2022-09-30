import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class AuthStore {
  isAuth: boolean = false;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  signup(name: string, email: string, password: string) {}

  signin(email: string, password: string) {}
}
