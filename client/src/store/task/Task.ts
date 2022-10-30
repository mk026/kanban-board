import { makeAutoObservable } from "mobx";
// import { BoardSection } from "../board-section/BoardSection";

import { TaskDto } from "./dto/TaskDto";
import { TaskStore } from "./TaskStore";

export class Task {
  id: number = 0;
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description: string;
  store: TaskStore;

  constructor(
    store: TaskStore,
    { id, boardId, sectionId, order, title, description }: TaskDto
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.sectionId = sectionId;
    this.order = order;
    this.title = title;
    this.description = description;
    this.store = store;
  }

  move(targetTask: Task, insertAfter: boolean) {
    const originSectionTasks = this.store.getTasksForSection(this.sectionId);
    const isSameSection = this.sectionId === targetTask.sectionId;
    const isMovingDown = this.order < targetTask.order;
    if (isSameSection) {
      if (isMovingDown) {
        const targetOrder = insertAfter
          ? targetTask.order
          : targetTask.order - 1;
        originSectionTasks.forEach((task) => {
          if (task.order <= targetOrder && task.order >= this.order) {
            task.order = task.order - 1;
          }
          if (task.order > targetOrder) {
            task.order = task.order + 1;
          }
        });
        this.order = targetOrder;
      } else {
        const targetOrder = insertAfter
          ? targetTask.order + 1
          : targetTask.order;
        const sourceOrder = this.order;
        originSectionTasks.forEach((task) => {
          if (task.order >= targetOrder && task.order <= sourceOrder) {
            task.order = task.order + 1;
          }
        });
        this.order = targetOrder;
      }
    } else {
      const targetSectionTasks = this.store.getTasksForSection(
        targetTask.sectionId
      );
      const targetOrder = insertAfter ? targetTask.order + 1 : targetTask.order;
      originSectionTasks.forEach((task) => {
        if (task.order >= this.order) {
          task.order = task.order - 1;
        }
      });
      targetSectionTasks.forEach((task) => {
        if (task.order >= targetOrder) {
          task.order = task.order + 1;
        }
      });
      this.sectionId = targetTask.sectionId;
      this.order = targetOrder;
    }
  }

  remove() {
    this.store.deleteTask(this.id);
  }
}
