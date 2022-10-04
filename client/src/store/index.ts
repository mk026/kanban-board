import { AuthStore } from "./auth/AuthStore";
import { BoardSectionStore } from "./board-section/BoardSectionStore";
import { BoardStore } from "./board/BoardStore";
import { TaskStore } from "./task/TaskStore";
import { UserStore } from "./user/UserStore";

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  boardStore: BoardStore;
  boardSectionStore: BoardSectionStore;
  taskStore: TaskStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.boardStore = new BoardStore(this);
    this.boardSectionStore = new BoardSectionStore(this);
    this.taskStore = new TaskStore(this);
  }
}

export const store = new RootStore();
