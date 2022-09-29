import { makeAutoObservable } from "mobx";
import { TaskStore } from "../TaskStore";

export class TaskModel {
  id: number = 0;
  title: string = "";
  description: string = "";
  store: TaskStore;

  constructor(store: TaskStore) {
    makeAutoObservable(this);
    this.store = store;
  }
}
