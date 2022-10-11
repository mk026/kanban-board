import { makeAutoObservable } from "mobx";

import { UserDto } from "./dto/UserDto";
import { UserStore } from "./UserStore";

export class User {
  id: number;
  name: string;
  email: string;
  store: UserStore;

  constructor(store: UserStore, { id, name, email }: UserDto) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.name = name;
    this.email = email;
  }
}
