import { makeAutoObservable } from "mobx";

import { UserStore } from "./UserStore";
import { UserResponse } from "../../types/userTypes";

export class User {
  id: number;
  name: string;
  bio?: string;
  email: string;
  store: UserStore;

  constructor(store: UserStore, { id, name, bio, email }: UserResponse) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.name = name;
    this.bio = bio;
    this.email = email;
  }
}
