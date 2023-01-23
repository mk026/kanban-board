import { makeAutoObservable } from "mobx";

import { TaskResponse } from "../../types/taskTypes";
import { BoardSection } from "../board-section/BoardSection";

export class Task {
  id: number = 0;
  boardId: number;
  sectionId: number;
  order: number;
  title: string;
  description: string;
  boardSection: BoardSection;
  isLoading: boolean = false;
  error: unknown = null;

  constructor(
    boardSection: BoardSection,
    { id, boardId, sectionId, order, title, description }: TaskResponse
  ) {
    makeAutoObservable(this);
    this.id = id;
    this.boardId = boardId;
    this.sectionId = sectionId;
    this.order = order;
    this.title = title;
    this.description = description;
    this.boardSection = boardSection;
  }

  move(targetTask: Task, insertAfter: boolean) {
    const originSectionTasks = this.boardSection.tasks;
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
      // const targetSectionTasks = this.store.getTasksForSection(
      //   targetTask.sectionId
      // );
      const targetSectionTasks = this.boardSection.board.boardSections.find(
        (section) => section.id === targetTask.sectionId
      )!.tasks;
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
    this.boardSection.deleteTask(this.id);
  }
}
