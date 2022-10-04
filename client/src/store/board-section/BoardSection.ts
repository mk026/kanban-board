import { makeAutoObservable } from "mobx";

import { BoardSectionStore } from "./BoardSectionStore";
import { BoardSectionDto } from "./dto/BoardSectionDto";

export class BoardSection {
  id: number = 0;
  title: string;
  store: BoardSectionStore;

  constructor(store: BoardSectionStore, { id, title }: BoardSectionDto) {
    makeAutoObservable(this);
    this.id = id;
    this.store = store;
    this.title = title;
  }
}
