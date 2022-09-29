import { BoardSectionStore } from "./BoardSectionStore";
import { BoardStore } from "./BoardStore";
import { TaskStore } from "./TaskStore";
import { UserStore } from "./UserStore";

export class RootStore {
  userStore: UserStore;
  boardStore: BoardStore;
  boardSectionStore: BoardSectionStore;
  taskStore: TaskStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.boardStore = new BoardStore(this);
    this.boardSectionStore = new BoardSectionStore(this);
    this.taskStore = new TaskStore(this);
  }
}

export const store = new RootStore();
