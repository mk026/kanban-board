import { makeAutoObservable, runInAction } from "mobx";
import BoardService from "../services/BoardService";
import { Board, CreateBoardDto } from "./models/Board";
import { RootStore } from "./RootStore";

export class BoardStore {
  boards: Board[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
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

  async fetchBoards() {
    this.isLoading = true;
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
}
