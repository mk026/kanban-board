import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { authRoutes, publicRoutes } from "../../../routes";

const AppRouter: FC = () => {
  const allRoutes = authRoutes.concat(publicRoutes);

  return (
    <Routes>
      {allRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
