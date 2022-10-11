import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { User } from "./User";
import { UserDto } from "./dto/UserDto";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import UserService from "../../services/UserService";

export class UserStore {
  rootStore: RootStore;
  user: User | null = null;
  isLoading: boolean = false;
  error: unknown = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUser(userDto: UserDto) {
    this.user = new User(this, userDto);
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    this.isLoading = true;
    try {
      const { data } = await UserService.updateUser(updateUserDto);
      const updatedUser = new User(this, data);
      runInAction(() => {
        this.user = updatedUser;
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

  async deleteUser() {
    this.isLoading = true;
    try {
      await UserService.deleteUser(this.user!.id);
      runInAction(() => {
        this.rootStore.authStore.signout();
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
