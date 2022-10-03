import { makeAutoObservable, runInAction } from "mobx";
import BoardSectionService from "../services/BoardSectionService";
import {
  BoardSection,
  CreateBoardSectionDto,
  UpdateBoardSectionDto,
} from "./models/BoardSection";
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
        data.forEach((boardSectionDto) => {
          this.boardSections.push(new BoardSection(this, boardSectionDto));
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

  async updateBoardSection(updateBoardSectionDto: UpdateBoardSectionDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardSectionService.updateBoardSection(
        updateBoardSectionDto
      );
      runInAction(() => {
        this.boardSections = this.boardSections.map((boardSection) =>
          boardSection.id === data.id
            ? { ...boardSection, ...data }
            : boardSection
        );
      });
      return data;
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

  async deleteBoardSection(id: number) {
    this.isLoading = true;
    try {
      await BoardSectionService.deleteBoardSection(id);
      runInAction(() => {
        this.boardSections = this.boardSections.filter(
          (board) => board.id === id
        );
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
}
