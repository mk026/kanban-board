import { makeAutoObservable } from "mobx";

import { TaskDto } from "./dto/TaskDto";
import { TaskStore } from "./TaskStore";

export class Task {
  id: number = 0;
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description: string;
  store: TaskStore;

  constructor(
    store: TaskStore,
    { id, boardId, sectionId, order, title, description }: TaskDto
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.sectionId = sectionId;
    this.order = order;
    this.title = title;
    this.description = description;
    this.store = store;
  }

  move(target: Task) {
    const targetOrder = target.order + 1;
    const targetSectionId = target.sectionId;

    this.store.updateTask({
      ...this,
      order: targetOrder,
      sectionId: targetSectionId,
    });
  }

  remove() {
    this.store.deleteTask(this.id);
  }
}
