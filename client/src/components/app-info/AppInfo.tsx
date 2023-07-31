import { FC } from "react";
import { Card, Typography } from "@mui/material";

import classes from "./AppInfo.module.scss";

const AppInfo: FC = () => {
  return (
    <Card className={classes.info}>
      <Typography variant="body1">Welcome to React Kanban Board App</Typography>
    </Card>
  );
};

export default AppInfo;
