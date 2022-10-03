import { makeAutoObservable } from "mobx";
import { BoardSectionStore } from "../BoardSectionStore";

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

export class BoardSectionDto {
  public readonly id: number;
  public readonly title: string;
}

export class CreateBoardSectionDto {
  public readonly title: string;
}

export class UpdateBoardSectionDto {
  public readonly id: number;
  public readonly title: string;
}
