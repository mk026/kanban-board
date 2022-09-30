import { makeAutoObservable } from "mobx";
import { Board } from "./models/Board";
import { RootStore } from "./RootStore";

export class BoardStore {
  boards: Board[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  createBoard(title: string, description: string) {
    const board = new Board(this, title, description);
    this.boards.push(board);
    return board;
  }
}
