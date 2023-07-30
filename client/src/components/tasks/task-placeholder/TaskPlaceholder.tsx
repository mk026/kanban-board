import { FC } from "react";
import { Box, Collapse } from "@mui/material";

import classes from "./TaskPlaceholder.module.scss";

interface TaskPlaceholderProps {
  open: boolean;
}

const TaskPlaceholder: FC<TaskPlaceholderProps> = ({ open }) => {
  return (
    <Collapse in={open}>
      <Box className={classes.placeholder} />
    </Collapse>
  );
};

export default TaskPlaceholder;
