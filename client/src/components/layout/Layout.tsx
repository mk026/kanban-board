import { FC, PropsWithChildren } from "react";

import Alerts from "../alerts";
import Header from "../header";

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
