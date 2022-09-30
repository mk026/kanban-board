import { makeAutoObservable } from "mobx";
import { UserStore } from "../UserStore";

export class User {
  id: number;
  name: string;
  email: string;
  store: UserStore;

  constructor(store: UserStore, id: number, name: string, email: string) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.name = name;
    this.email = email;
  }
}

export interface IUser extends Pick<User, "id" | "name" | "email"> {}
