import { Box, Button, Link } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";

import { useStore } from "../../hooks/useStore";
import { Paths } from "../../routes";
import Navbar from "../navbar/Navbar";

const Header: FC = () => {
  const { authStore } = useStore();

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        padding: "1rem",
        background: "#523e3e",
        top: 0,
        zIndex: 10,
      }}
    >
      <Navbar />
      {!authStore.isAuth && (
        <Button>
          <Link component={RouterLink} to={Paths.AUTH_PATH}>
            Signin
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default observer(Header);
