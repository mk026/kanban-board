import { AuthStore } from "./AuthStore";
import { BoardSectionStore } from "./BoardSectionStore";
import { BoardStore } from "./BoardStore";
import { TaskStore } from "./TaskStore";
import { UserStore } from "./UserStore";

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
