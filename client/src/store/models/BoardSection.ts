import { makeAutoObservable } from "mobx";
import { BoardSectionStore } from "../BoardSectionStore";

export class BoardSection {
  id: number = 0;
  title: string;
  store: BoardSectionStore;

  constructor(store: BoardSectionStore, title: string) {
    makeAutoObservable(this);
    this.store = store;
    this.title = title;
  }
}

export interface IBoardSection extends Pick<BoardSection, "id" | "title"> {}
