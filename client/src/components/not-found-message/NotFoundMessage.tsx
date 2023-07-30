import { FC } from "react";
import { Card, Typography } from "@mui/material";

import classes from "./NotFoundMessage.module.scss";

const NotFoundMessage: FC = () => {
  return (
    <Card className={classes.message}>
      <Typography variant="body1">Page Not Found</Typography>
    </Card>
  );
};

export default NotFoundMessage;
