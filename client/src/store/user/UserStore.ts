import { makeAutoObservable } from "mobx";

import { RootStore } from "..";
import { User } from "./User";
import { UserDto } from "./dto/UserDto";

export class UserStore {
  rootStore: RootStore;
  user: User | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUser({ id, name, email }: UserDto) {
    this.user = new User(this, id, name, email);
  }
}
