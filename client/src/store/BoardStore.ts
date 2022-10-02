import { makeAutoObservable, runInAction } from "mobx";
import BoardService from "../services/BoardService";
import { Board, IBoard } from "./models/Board";
import { RootStore } from "./RootStore";

export class BoardStore {
  boards: Board[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  createBoard({ id, title, description }: IBoard) {
    const board = new Board(this, id, title, description);
    this.boards.push(board);
    return board;
  }

  async fetchBoards() {
    this.isLoading = true;
    try {
      const { data } = await BoardService.getBoards();
      runInAction(() => {
        this.boards = data.map(this.createBoard);
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    } finally {
      this.isLoading = false;
    }
  }
}
