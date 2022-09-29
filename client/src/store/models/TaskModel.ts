import { makeAutoObservable } from "mobx";
import { TaskStore } from "../TaskStore";

export class TaskModel {
  id: number = 0;
  title: string;
  description: string;
  store: TaskStore;

  constructor(store: TaskStore, title: string, description: string) {
    makeAutoObservable(this);
    this.store = store;
    this.title = title;
    this.description = description;
  }
}
