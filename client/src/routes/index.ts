import { ComponentType } from "react";

import ProfilePage from "../pages/profile-page/ProfilePage";
import AuthPage from "../pages/auth-page/AuthPage";
import BoardsPage from "../pages/boards-page/BoardsPage";
import HomePage from "../pages/home-page/HomePage";

export enum Paths {
  HOME_PATH = "/",
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
  { path: Paths.HOME_PATH, Component: HomePage },
  { path: Paths.AUTH_PATH, Component: AuthPage },
];
