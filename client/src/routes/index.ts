import { ComponentType } from "react";

import ProfilePage from "../pages/profile-page";
import AuthPage from "../pages/auth-page";
import BoardsPage from "../pages/boards-page";
import BoardPage from "../pages/board-page";
import HomePage from "../pages/home-page";

export enum Paths {
  HOME_PATH = "/",
  BOARDS_PATH = "/boards",
  BOARD_PATH = "/boards/:id",
  AUTH_PATH = "/auth",
  PROFILE_PATH = "/profile",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const authRoutes: IRoute[] = [
  { path: Paths.BOARDS_PATH, Component: BoardsPage },
  { path: Paths.BOARD_PATH, Component: BoardPage },
  { path: Paths.PROFILE_PATH, Component: ProfilePage },
];

export const publicRoutes: IRoute[] = [
  { path: Paths.HOME_PATH, Component: HomePage },
  { path: Paths.AUTH_PATH, Component: AuthPage },
];
