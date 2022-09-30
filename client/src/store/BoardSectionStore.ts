import { makeAutoObservable } from "mobx";
import { BoardSection } from "./models/BoardSection";
import { RootStore } from "./RootStore";

export class BoardSectionStore {
  boardSections: BoardSection[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  createBoardSection(title: string) {
    const boardSection = new BoardSection(this, title);
    this.boardSections.push(boardSection);
    return boardSection;
  }
}
