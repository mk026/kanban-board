import { makeAutoObservable } from "mobx";

import { BoardSectionStore } from "./BoardSectionStore";
import { BoardSectionDto } from "./dto/BoardSectionDto";
import { TaskFormValues } from "../../validation/taskValidation";

export class BoardSection {
  id: number;
  boardId: number;
  order: number;
  title: string;
  store: BoardSectionStore;

  constructor(
    store: BoardSectionStore,
    { id, boardId, order, title }: BoardSectionDto
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.order = order;
    this.title = title;
    this.store = store;
  }

  getTasks() {
    return this.store.rootStore.taskStore
      .getTasksForSection(this.id)
      .sort((a, b) => {
        if (a.order < b.order) {
          return -1;
        } else {
          return 1;
        }
      });
  }

  addTask({ title, description }: TaskFormValues) {
    const order = Math.max(...this.getTasks().map((task) => task.order)) + 1;
    return this.store.rootStore.taskStore.createTask({
      boardId: this.boardId,
      sectionId: this.id,
      order,
      title,
      description,
    });
  }

  remove() {
    this.store.deleteBoardSection(this.id);
  }
}
