import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import AuthWrapper from "../auth-wrapper";
import NotFoundPage from "../../../pages/not-found-page";
import { authRoutes, publicRoutes } from "../../../routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<AuthWrapper />}>
        {authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
