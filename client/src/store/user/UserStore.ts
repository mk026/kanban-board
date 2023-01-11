import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { User } from "./User";
import { UpdatePasswordFormValues } from "../../validation/updatePasswordValidation";
import UserService from "../../services/UserService";
import { UpdateUserDto, UserResponse } from "../../types";

export class UserStore {
  rootStore: RootStore;
  user: User | null = null;
  isLoading: boolean = false;
  error: unknown = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setUser(userDto: UserResponse) {
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

  async updatePassword(updatePasswordValues: UpdatePasswordFormValues) {
    this.isLoading = true;
    try {
      await UserService.updatePassword(updatePasswordValues);
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
