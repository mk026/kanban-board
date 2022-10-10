import { Link, Stack } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Paths } from "../../routes";

const Navbar: FC = () => {
  return (
    <nav>
      <Stack direction="row">
        <Link component={NavLink} to={Paths.HOME_PATH}>
          Home
        </Link>
        <Link component={NavLink} to={Paths.BOARDS_PATH}>
          Boards
        </Link>
        <Link component={NavLink} to={Paths.PROFILE_PATH}>
          Profile
        </Link>
        <Link component={NavLink} to={Paths.AUTH_PATH}>
          Login
        </Link>
      </Stack>
    </nav>
  );
};

export default Navbar;
