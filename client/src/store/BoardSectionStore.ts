import { makeAutoObservable } from "mobx";
import { BoardSectionModel } from "./models/BoardSectionModel";
import { RootStore } from "./RootStore";

export class BoardSectionStore {
  boardSections: BoardSectionModel[] = [];

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }
}
