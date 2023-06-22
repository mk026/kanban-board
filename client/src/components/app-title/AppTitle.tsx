import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import { Paths } from "../../routes";

const AppTitle: FC = () => {
  return (
    <Typography variant="h1" component={Link} to={Paths.HOME_PATH}>
      React Kanban Board
    </Typography>
  );
};

export default AppTitle;
