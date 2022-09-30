import { makeAutoObservable } from "mobx";
import { UserStore } from "../UserStore";

export class User {
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

export interface IUser extends Pick<User, "id" | "name" | "email"> {}
