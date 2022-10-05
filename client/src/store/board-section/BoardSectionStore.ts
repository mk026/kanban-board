import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { BoardSection } from "./BoardSection";
import { CreateBoardSectionDto } from "./dto/CreateBoardSectionDto";
import { UpdateBoardSectionDto } from "./dto/UpdateBoardSectionDto";
import BoardSectionService from "../../services/BoardSectionService";

export class BoardSectionStore {
  rootStore: RootStore;
  boardSections: BoardSection[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchBoardSections(boardId: number) {
    this.isLoading = true;
    this.boardSections = [];
    try {
      const { data } = await BoardSectionService.getBoardSections(boardId);
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
      const updatedBoardSection = new BoardSection(this, data);
      runInAction(() => {
        this.boardSections = this.boardSections.map((boardSection) =>
          boardSection.id === data.id ? updatedBoardSection : boardSection
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
