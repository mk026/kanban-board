import { makeAutoObservable } from "mobx";

import { BoardSectionStore } from "./BoardSectionStore";
import { BoardSectionDto } from "./dto/BoardSectionDto";
import { TaskFormValues } from "../../validation/taskValidation";

export class BoardSection {
  id: number;
  boardId: number;
  title: string;
  store: BoardSectionStore;

  constructor(
    store: BoardSectionStore,
    { id, boardId, title }: BoardSectionDto
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.title = title;
    this.store = store;
  }

  getTasks() {
    return this.store.rootStore.taskStore.getTasksForSection(this.id);
  }

  addTask({ title, description }: TaskFormValues) {
    return this.store.rootStore.taskStore.createTask({
      boardId: this.boardId,
      sectionId: this.id,
      title,
      description,
    });
  }

  remove() {
    this.store.deleteBoardSection(this.id);
  }
}
