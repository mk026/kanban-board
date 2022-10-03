import { makeAutoObservable } from "mobx";
import { User, UserDto } from "./models/User";
import { RootStore } from "./RootStore";

export class UserStore {
  user: User | null = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  setUser({ id, name, email }: UserDto) {
    this.user = new User(this, id, name, email);
  }
}
