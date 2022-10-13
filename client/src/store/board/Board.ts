import { makeAutoObservable } from "mobx";

import { BoardStore } from "./BoardStore";
import { BoardDto } from "./dto/BoardDto";
import { BoardSectionFormValues } from "../../validation/boardSectionValidation";

export class Board {
  id: number = 0;
  title: string;
  description: string;
  store: BoardStore;

  constructor(store: BoardStore, { id, title, description }: BoardDto) {
    makeAutoObservable(this);
    this.store = store;
    this.id = id;
    this.title = title;
    this.description = description;
  }

  fetchBoardContent() {
    this.store.rootStore.boardSectionStore.fetchBoardSections(this.id);
    this.store.rootStore.taskStore.fetchTasks(this.id);
  }

  addBoardSection({ title }: BoardSectionFormValues) {
    const order =
      Math.max(
        ...this.store.rootStore.boardSectionStore.boardSections.map(
          (boardSection) => boardSection.order
        )
      ) + 1;
    return this.store.rootStore.boardSectionStore.createBoardSection({
      boardId: this.id,
      order,
      title,
    });
  }

  remove() {
    this.store.deleteBoard(this.id);
  }
}
