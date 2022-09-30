import { makeAutoObservable } from "mobx";
import { User } from "./models/User";
import { RootStore } from "./RootStore";

export class UserStore {
  user: User | null = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}
