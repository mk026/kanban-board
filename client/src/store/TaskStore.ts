import { makeAutoObservable, runInAction } from "mobx";
import TaskService from "../services/TaskService";
import { CreateTaskDto, Task, UpdateTaskDto } from "./models/Task";
import { RootStore } from "./RootStore";

export class TaskStore {
  tasks: Task[] = [];
  isLoading: boolean = false;
  error: unknown = null;

  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async fetchTasks() {
    this.isLoading = true;
    this.tasks = [];
    try {
      const { data } = await TaskService.getTasks();
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
      });
      return task;
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

  async updateTask(updateTaskDto: UpdateTaskDto) {
    this.isLoading = true;
    try {
      const { data } = await TaskService.updateTask(updateTaskDto);
      runInAction(() => {
        this.tasks = this.tasks.map((task) =>
          task.id === data.id ? { ...task, ...data } : task
        );
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

  async deleteTask(id: number) {
    this.isLoading = true;
    try {
      await TaskService.deleteTask(id);
      runInAction(() => {
        this.tasks = this.tasks.filter((task) => task.id === id);
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
