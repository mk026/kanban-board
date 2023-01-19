import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useStore } from "../../../hooks/useStore";
import { Paths } from "../../../routes";

const AuthWrapper: FC = () => {
  const {
    authStore: { isAuth },
  } = useStore();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={Paths.AUTH_PATH} replace state={{ from: location }} />
  );
};

export default AuthWrapper;
