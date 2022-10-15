import { makeAutoObservable, runInAction } from "mobx";

import { RootStore } from "..";
import { Task } from "./Task";
import { CreateTaskDto } from "./dto/CreateTaskDto";
import { UpdateTaskDto } from "./dto/UpdateTaskDto";
import TaskService from "../../services/TaskService";

export class TaskStore {
  rootStore: RootStore;
  tasks: Task[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  async fetchTasks(boardId: number) {
    this.isLoading = true;
    this.tasks = [];
    try {
      const { data } = await TaskService.getTasks(boardId);
      runInAction(() => {
        data.forEach((taskDto) => {
          this.tasks.push(new Task(this, taskDto));
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

  async createTask(createTaskDto: CreateTaskDto) {
    this.isLoading = true;
    try {
      const { data } = await TaskService.addTask(createTaskDto);
      const task = new Task(this, data);
      runInAction(() => {
        this.tasks.push(task);
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully added new task",
        });
      });
      return task;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to add task",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async updateTask(updateTaskDto: UpdateTaskDto) {
    this.isLoading = true;
    try {
      const { data } = await TaskService.updateTask(updateTaskDto);
      const updatedTask = new Task(this, data);
      runInAction(() => {
        this.tasks = this.tasks.map((task) =>
          task.id === data.id ? updatedTask : task
        );
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully updated task",
        });
      });
      return data;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to update task",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async deleteTask(id: number) {
    this.isLoading = true;
    try {
      await TaskService.deleteTask(id);
      runInAction(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully deleted task",
        });
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.rootStore.uiStore.addAlert({
          severity: "error",
          title: "Error",
          message: "Failed to delete task",
        });
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  getTasksForSection(sectionId: number) {
    return this.tasks.filter((task) => task.sectionId === sectionId);
  }
}
