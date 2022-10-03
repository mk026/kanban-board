import { makeAutoObservable, runInAction } from "mobx";
import BoardSectionService from "../services/BoardSectionService";
import { BoardSection, CreateBoardSectionDto } from "./models/BoardSection";
import { RootStore } from "./RootStore";

export class BoardSectionStore {
  boardSections: BoardSection[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async fetchBoardSections() {
    this.isLoading = true;
    this.boardSections = [];
    try {
      const { data } = await BoardSectionService.getBoardSections();
      runInAction(() => {
        data.forEach((boardDto) => {
          this.boardSections.push(new BoardSection(this, boardDto));
        });
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async createBoardSection(createBoardSectionDto: CreateBoardSectionDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardSectionService.addBoardSection(
        createBoardSectionDto
      );
      const boardSection = new BoardSection(this, data);
      runInAction(() => {
        this.boardSections.push(boardSection);
      });
      return boardSection;
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
