import { makeAutoObservable, runInAction } from "mobx";

import { BoardSectionDto } from "./dto/BoardSectionDto";
import { Board } from "../board/Board";
import { Task } from "../task/Task";
import TaskService from "../../services/TaskService";
import { CreateTaskDto } from "../task/dto/CreateTaskDto";
import { UpdateTaskDto } from "../task/dto/UpdateTaskDto";

export class BoardSection {
  id: number;
  isLoading: boolean = false;
  error: unknown = null;
  boardId: number;
  order: number;
  title: string;
  board: Board;
  tasks: Task[] = [];

  constructor(board: Board, { id, boardId, order, title }: BoardSectionDto) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.order = order;
    this.title = title;
    this.board = board;
  }

  async fetchTasks() {
    this.board.store.isLoading = true;
    this.tasks = [];
    try {
      const { data } = await TaskService.getTasks(this.id);
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
        this.board.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully added new task",
        });
      });
      return task;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.board.store.rootStore.uiStore.addAlert({
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
        this.board.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully updated task",
        });
      });
      return data;
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.board.store.rootStore.uiStore.addAlert({
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
        this.board.store.rootStore.uiStore.addAlert({
          severity: "success",
          title: "Success",
          message: "Successfully deleted task",
        });
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.board.store.rootStore.uiStore.addAlert({
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

  remove() {
    this.board.deleteBoardSection(this.id);
  }
}
