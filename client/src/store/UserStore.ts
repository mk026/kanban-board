import { makeAutoObservable } from "mobx";
import { IUser, User } from "./models/User";
import { RootStore } from "./RootStore";

export class UserStore {
  user: User | null = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  setUser({ id, name, email }: IUser) {
    this.user = new User(this, id, name, email);
  }
}
