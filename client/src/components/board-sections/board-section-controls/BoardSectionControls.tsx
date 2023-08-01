import { FC } from "react";
import { Button, Stack } from "@mui/material";

import classes from "./BoardSectionControls.module.scss";

interface BoardSectionControlsProps {
  onAddTask: () => void;
  onEditSection: () => void;
  onDeleteSection: () => void;
}

const BoardSectionControls: FC<BoardSectionControlsProps> = ({
  onAddTask,
  onEditSection,
  onDeleteSection,
}) => {
  return (
    <Stack direction="row" className={classes.controls}>
      <Button onClick={onAddTask}>Add Task</Button>
      <Button onClick={onEditSection}>Edit</Button>
      <Button onClick={onDeleteSection}>Delete</Button>
    </Stack>
  );
};

export default BoardSectionControls;
