import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { Board } from "./Board";
import { CreateBoardDto } from "./dto/CreateBoardDto";
import { UpdateBoardDto } from "./dto/UpdateBoardDto";
import BoardService from "../../services/BoardService";

export class BoardStore {
  rootStore: RootStore;
  boards: Board[] = [];
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

  async createBoard(createBoardDto: CreateBoardDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardService.addBoard(createBoardDto);
      const board = new Board(this, data);
      runInAction(() => {
        this.boards.push(board);
      });
      return board;
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

  async updateBoard(updateBoardDto: UpdateBoardDto) {
    this.isLoading = true;
    try {
      const { data } = await BoardService.updateBoard(updateBoardDto);
      const updatedBoard = new Board(this, data);
      runInAction(() => {
        this.boards = this.boards.map((board) =>
          board.id === updatedBoard.id ? updatedBoard : board
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

  async deleteBoard(id: number) {
    this.isLoading = true;
    try {
      await BoardService.deleteBoard(id);
      runInAction(() => {
        this.boards = this.boards.filter((board) => board.id !== id);
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

  getBoardById(boardId: number) {
    return this.boards.find((board) => board.id === boardId);
  }
}
