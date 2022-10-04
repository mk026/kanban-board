import { makeAutoObservable } from "mobx";

import { BoardStore } from "./BoardStore";
import { BoardDto } from "./dto/BoardDto";

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
