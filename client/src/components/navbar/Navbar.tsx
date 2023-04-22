import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";

import { Paths } from "../../routes";

const Navbar: FC = () => {
  const { pathname } = useLocation();
  const boardMatch = useMatch(Paths.BOARD_PATH);

  return (
    <Tabs component="nav" value={pathname}>
      <Tab
        label="Home"
        value={Paths.HOME_PATH}
        component={NavLink}
        to={Paths.HOME_PATH}
      />
      <Tab
        label="Boards"
        value={boardMatch?.pathname ?? Paths.BOARDS_PATH}
        component={NavLink}
        to={Paths.BOARDS_PATH}
      />
      <Tab
        label="Profile"
        value={Paths.PROFILE_PATH}
        component={NavLink}
        to={Paths.PROFILE_PATH}
      />
    </Tabs>
  );
};

export default Navbar;
