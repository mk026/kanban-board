import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

import { Paths } from "../../routes";

const AuthLinks: FC = () => {
  return (
    <Stack direction="row">
      <Button component={NavLink} to={Paths.AUTH_PATH} variant="outlined">
        Create Account
      </Button>
      <Button component={NavLink} to={Paths.AUTH_PATH} variant="contained">
        Signin
      </Button>
    </Stack>
  );
};

export default AuthLinks;
