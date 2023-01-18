import { AppBar, Box, Button, Link } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";

import { useStore } from "../../hooks/useStore";
import { Paths } from "../../routes";
import Navbar from "../navbar";

const Header: FC = () => {
  const { authStore } = useStore();

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={{ backgroundColor: "darkgray" }}
    >
      <Box sx={{ padding: "1rem" }}>
        <Navbar />
        {!authStore.isAuth && (
          <Button>
            <Link component={RouterLink} to={Paths.AUTH_PATH}>
              Signin
            </Link>
          </Button>
        )}
      </Box>
    </AppBar>
  );
};

export default observer(Header);
