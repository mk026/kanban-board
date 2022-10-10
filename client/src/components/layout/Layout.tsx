import { FC, PropsWithChildren } from "react";

import Alerts from "../alerts/Alerts";
import Header from "../header/Header";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Alerts />
    </>
  );
};

export default Layout;
