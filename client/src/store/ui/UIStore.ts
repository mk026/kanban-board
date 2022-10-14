import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { RootStore } from "..";

export interface IAlert {
  id: number;
  severity: AlertColor;
  title: string;
  message: string;
  timer: ReturnType<typeof setTimeout>;
}

export class UIStore {
  rootStore: RootStore;
  alerts: IAlert[] = [];
  alertsCount: number = 0;
  addBoardFormIsActive: boolean = false;
  editBoardFormIsActive: boolean = false;
  addBoardSectionFormIsActive: boolean = false;
  addTaskFormIsActive: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addAlert(alert: Omit<IAlert, "id" | "timer">) {
    const id = this.alertsCount++;
    const timer = setTimeout(() => this.removeAlert(id), 5000);
    this.alerts.push({ ...alert, id, timer });
  }

  removeAlert(id: number) {
    this.alerts = this.alerts.filter((alert) => {
      if (alert.id === id) {
        clearTimeout(alert.timer);
        return false;
      }
      return true;
    });
  }

  toggleAddBoardForm() {
    this.addBoardFormIsActive = !this.addBoardFormIsActive;
  }

  toggleEditBoardForm() {
    this.editBoardFormIsActive = !this.editBoardFormIsActive;
  }

  toggleAddBoardSectionForm() {
    this.addBoardSectionFormIsActive = !this.addBoardSectionFormIsActive;
  }

  toggleAddTaskForm() {
    this.addTaskFormIsActive = !this.addTaskFormIsActive;
  }
}
