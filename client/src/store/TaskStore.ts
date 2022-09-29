import { makeAutoObservable } from "mobx";
import { TaskModel } from "./models/TaskModel";
import { RootStore } from "./RootStore";

export class TaskStore {
  tasks: TaskModel[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}
