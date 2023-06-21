import { Card, Typography } from "@mui/material";
import { FC } from "react";

const NotFoundMessage: FC = () => {
  return (
    <Card>
      <Typography variant="body1">Page Not Found</Typography>
    </Card>
  );
};

export default NotFoundMessage;
