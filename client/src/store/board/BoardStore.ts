import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { Board } from "./Board";
import BoardService from "../../services/BoardService";
import { CreateBoardDto, UpdateBoardDto } from "../../types/boardTypes";

export class BoardStore {
  rootStore: RootStore;
  boards: Board[] = [];
  activeBoard: Board;
  isLoading: boolean = false;
  error: unknown = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchBoards() {
    this.isLoading = true;
    this.boards = [];
    try {
      const { data } = await BoardService.getBoards();
      runInAction(() => {
        data.forEach((boardDto) => {
          this.boards.push(new Board(this, boardDto));
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

  async fetchActiveBoard(id: number) {
    this.isLoading = true;
    this.boards = [];
    try {
      const { data } = await BoardService.getBoard(id);
      runInAction(() => {
        this.activeBoard = new Board(this, data);
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

  async createBoard(createBoardDto: CreateBoardDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardService.addBoard(createBoardDto);
      const board = new Board(this, data);
      runInAction(() => {
        this.boards.push(board);
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully added new board",
        });
      });
      return board;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to add board",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async updateBoard(id: number, updateBoardDto: UpdateBoardDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardService.updateBoard(id, updateBoardDto);
      const updatedBoard = new Board(this, data);
      runInAction(() => {
        this.boards = this.boards.map((board) =>
          board.id === updatedBoard.id ? updatedBoard : board
        );
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully updated board",
        });
      });
      return data;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to update board",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async deleteBoard(id: number) {
    this.isLoading = true;
    try {
      await BoardService.deleteBoard(id);
      runInAction(() => {
        this.boards = this.boards.filter((board) => board.id !== id);
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully deleted board",
        });
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to delete board",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  getBoardById(boardId: number) {
    return this.boards.find((board) => board.id === boardId);
  }
}
