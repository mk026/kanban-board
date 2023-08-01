import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

import classes from "./AuthLinks.module.scss";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row">
      <Button component={NavLink} to={Paths.AUTH_PATH} variant="outlined">
        Create Account
      </Button>
      <Button
        className={classes.signin}
        component={NavLink}
        to={Paths.AUTH_PATH}
        variant="contained"
      >
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
