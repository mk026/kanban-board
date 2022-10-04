import { makeAutoObservable } from "mobx";

import { TaskDto } from "./dto/TaskDto";
import { TaskStore } from "./TaskStore";

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
