import { makeAutoObservable } from "mobx";
import { UserModel } from "./models/UserModel";
import { RootStore } from "./RootStore";

export class UserStore {
  user: UserModel | null = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}
