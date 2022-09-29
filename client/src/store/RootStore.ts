import { BoardStore } from "./BoardStore";
import { UserStore } from "./UserStore";

export class RootStore {
  userStore: UserStore;
  boardStore: BoardStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.boardStore = new BoardStore(this);
  }
}

export const store = new RootStore();
