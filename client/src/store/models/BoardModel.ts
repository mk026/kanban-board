import { makeAutoObservable } from "mobx";
import { BoardStore } from "../BoardStore";

export class BoardModel {
  id: number = 0;
  title: string;
  description: string;
  store: BoardStore;

  constructor(store: BoardStore, title: string, description: string) {
    makeAutoObservable(this);
    this.store = store;
    this.title = title;
    this.description = description;
  }
}
