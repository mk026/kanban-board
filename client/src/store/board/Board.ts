import { makeAutoObservable, runInAction } from "mobx";

import { BoardStore } from "./BoardStore";
import { BoardSection } from "../board-section/BoardSection";
import BoardSectionService from "../../services/BoardSectionService";
import {
  BoardResponse,
  CreateBoardSectionDto,
  UpdateBoardSectionDto,
} from "../../types";

export class Board {
  id: number = 0;
  title: string;
  description: string;
  boardSections: BoardSection[] = [];
  store: BoardStore;

  constructor(store: BoardStore, { id, title, description }: BoardResponse) {
    makeAutoObservable(this);
    this.store = store;
    this.id = id;
    this.title = title;
    this.description = description;
  }

  async fetchBoardSections() {
    this.store.isLoading = true;
    this.boardSections = [];
    try {
      const { data } = await BoardSectionService.getBoardSections(this.id);
      runInAction(() => {
        data.forEach((boardSectionDto) => {
          this.boardSections.push(new BoardSection(this, boardSectionDto));
        });
      });
    } catch (error) {
      runInAction(() => {
        this.store.error = error;
      });
    } finally {
      runInAction(() => {
        this.store.isLoading = false;
      });
    }
  }

  async createBoardSection(createBoardSectionDto: CreateBoardSectionDto) {
    this.store.isLoading = true;
    try {
      const { data } = await BoardSectionService.addBoardSection(
        createBoardSectionDto
      );
      const boardSection = new BoardSection(this, data);
      runInAction(() => {
        this.boardSections.push(boardSection);
        this.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully added new board section",
        });
      });
      return boardSection;
    } catch (error) {
      runInAction(() => {
        this.store.error = error;
        this.store.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to add board section",
        });
      });
    } finally {
      runInAction(() => {
        this.store.isLoading = false;
      });
    }
  }

  async updateBoardSection(updateBoardSectionDto: UpdateBoardSectionDto) {
    this.store.isLoading = true;
    try {
      const { data } = await BoardSectionService.updateBoardSection(
        updateBoardSectionDto
      );
      const updatedBoardSection = new BoardSection(this, data);
      runInAction(() => {
        this.boardSections = this.boardSections.map((boardSection) =>
          boardSection.id === data.id ? updatedBoardSection : boardSection
        );
        this.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully updated board section",
        });
      });
      return data;
    } catch (error) {
      runInAction(() => {
        this.store.error = error;
        this.store.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to update board sections",
        });
      });
    } finally {
      runInAction(() => {
        this.store.isLoading = false;
      });
    }
  }

  async deleteBoardSection(id: number) {
    this.store.isLoading = true;
    try {
      await BoardSectionService.deleteBoardSection(id);
      runInAction(() => {
        this.boardSections = this.boardSections.filter(
          (board) => board.id !== id
        );
        this.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully deleted board section",
        });
      });
    } catch (error) {
      runInAction(() => {
        this.store.error = error;
        this.store.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to delete board sections",
        });
      });
    } finally {
      runInAction(() => {
        this.store.isLoading = false;
      });
    }
  }

  remove() {
    this.store.deleteBoard(this.id);
  }
}
