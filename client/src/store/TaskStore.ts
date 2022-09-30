import { makeAutoObservable } from "mobx";
import { Task } from "./models/Task";
import { RootStore } from "./RootStore";

export class TaskStore {
  tasks: Task[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  createTask(title: string, description: string) {
    const task = new Task(this, title, description);
    this.tasks.push(task);
    return task;
  }
}
