import { makeAutoObservable } from "mobx";
import { TaskStore } from "../TaskStore";

export class Task {
  id: number = 0;
  title: string;
  description: string;
  store: TaskStore;

  constructor(store: TaskStore, { id, title, description }: TaskDto) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.title = title;
    this.description = description;
  }
}

export class TaskDto {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
}

export class CreateTaskDto {
  public readonly title: string;
  public readonly description: string;
}

export class UpdateTaskDto {
  public readonly id: number;
  public readonly title?: string;
  public readonly description?: string;
}
