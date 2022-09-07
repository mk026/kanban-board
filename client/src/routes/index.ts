import { ComponentType } from "react";

import ProfilePage from "../pages/profile-page/ProfilePage";
import AuthPage from "../pages/auth-page/AuthPage";
import BoardsPage from "../pages/boards-page/BoardsPage";

export enum Paths {
  BOARDS_PATH = "/boards",
  AUTH_PATH = "/auth",
  PROFILE_PATH = "/profile",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const authRoutes: IRoute[] = [
  { path: Paths.BOARDS_PATH, Component: BoardsPage },
  { path: Paths.PROFILE_PATH, Component: ProfilePage },
];

export const publicRoutes: IRoute[] = [
  { path: Paths.AUTH_PATH, Component: AuthPage },
];
