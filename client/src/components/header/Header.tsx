import { AppBar, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import { useStore } from "../../hooks/useStore";
import Navbar from "../navbar";
import AuthLinks from "../auth-links";
import AppTitle from "../app-title";

import classes from "./Header.module.scss";

const Header: FC = () => {
  const { authStore } = useStore();

  return (
    <AppBar component="header" className={classes.header} data-testid="header">
      <Box sx={{ padding: "1rem" }}>
        <AppTitle />
        {authStore.isAuth ? <Navbar /> : <AuthLinks />}
      </Box>
    </AppBar>
  );
};

export default observer(Header);
