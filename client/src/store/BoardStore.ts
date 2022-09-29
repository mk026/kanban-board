import { makeAutoObservable } from "mobx";
import { BoardModel } from "./models/BoardModel";
import { RootStore } from "./RootStore";

export class BoardStore {
  boards: BoardModel[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  createBoard(title: string, description: string) {
    const board = new BoardModel(this, title, description);
    this.boards.push(board);
    return board;
  }
}
