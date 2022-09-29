import { makeAutoObservable } from "mobx";
import { UserStore } from "../UserStore";

export class UserModel {
  id: number = 0;
  name: string;
  email: string;
  store: UserStore;

  constructor(store: UserStore, name: string, email: string) {
    makeAutoObservable(this);
    this.store = store;
    this.name = name;
    this.email = email;
  }
}
