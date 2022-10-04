import { makeAutoObservable } from "mobx";

import { TaskDto } from "./dto/TaskDto";
import { TaskStore } from "./TaskStore";

export class Task {
  id: number = 0;
  boardId: number;
  sectionId: number;
  title: string;
  description: string;
  store: TaskStore;

  constructor(
    store: TaskStore,
    { id, boardId, sectionId, title, description }: TaskDto
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.sectionId = sectionId;
    this.title = title;
    this.description = description;
    this.store = store;
  }
}
