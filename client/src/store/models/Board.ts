import { makeAutoObservable } from "mobx";
import { BoardStore } from "../BoardStore";

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
}

export class BoardDto {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
}

export class CreateBoardDto {
  public readonly title: string;
  public readonly description: string;
}

export class UpdateBoardDto {
  public readonly id: number;
  public readonly title?: string;
  public readonly description?: string;
}
