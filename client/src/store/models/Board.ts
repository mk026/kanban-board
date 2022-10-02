import { makeAutoObservable } from "mobx";
import { BoardStore } from "../BoardStore";

export class Board {
  id: number = 0;
  title: string;
  description: string;
  store: BoardStore;

  constructor(
    store: BoardStore,
    id: number,
    title: string,
    description: string
  ) {
    makeAutoObservable(this);
    this.store = store;
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export interface IBoard extends Pick<Board, "id" | "title" | "description"> {}
