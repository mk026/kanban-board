import { AppBar, Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { FC } from "react";

import { useStore } from "../../hooks/useStore";
import Navbar from "../navbar";
import AuthLinks from "../auth-links";

const Header: FC = () => {
  const { authStore } = useStore();

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{ backgroundColor: "darkgray" }}
      data-testid="header"
    >
      <Box sx={{ padding: "1rem" }}>
        {authStore.isAuth ? <Navbar /> : <AuthLinks />}
      </Box>
    </AppBar>
  );
};

export default observer(Header);
