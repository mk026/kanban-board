import { makeAutoObservable } from "mobx";

import { UserStore } from "./UserStore";
import { UserResponse } from "../../types/userTypes";

export class User {
  id: number;
  name: string;
  email: string;
  store: UserStore;

  constructor(store: UserStore, { id, name, email }: UserResponse) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.name = name;
    this.email = email;
  }
}
