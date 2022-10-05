import { makeAutoObservable } from "mobx";

import { BoardSectionStore } from "./BoardSectionStore";
import { BoardSectionDto } from "./dto/BoardSectionDto";

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
}
