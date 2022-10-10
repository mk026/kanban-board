import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { RootStore } from "..";

export interface IAlert {
  severity: AlertColor;
  title: string;
  message: string;
}

export class UIStore {
  rootStore: RootStore;
  alerts: IAlert[] = [];
  addBoardFormIsActive: boolean = false;
  addBoardSectionFormIsActive: boolean = false;
  addTaskFormIsActive: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addAlert(alert: IAlert) {
    this.alerts.push(alert);
    setTimeout(() => this.shiftAlerts(), 5000);
  }

  shiftAlerts() {
    this.alerts.shift();
  }

  toggleAddBoardForm() {
    this.addBoardFormIsActive = !this.addBoardFormIsActive;
  }

  toggleAddBoardSectionForm() {
    this.addBoardSectionFormIsActive = !this.addBoardSectionFormIsActive;
  }

  toggleAddTaskForm() {
    this.addTaskFormIsActive = !this.addTaskFormIsActive;
  }
}
