import { AuthStore } from "./auth/AuthStore";
import { BoardStore } from "./board/BoardStore";
import { UIStore } from "./ui/UIStore";
import { UserStore } from "./user/UserStore";

export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  boardStore: BoardStore;
  uiStore: UIStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this);
    this.boardStore = new BoardStore(this);
    this.uiStore = new UIStore(this);
  }
}

export const store = new RootStore();
