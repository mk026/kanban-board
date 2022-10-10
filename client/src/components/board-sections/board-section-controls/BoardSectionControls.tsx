import { FC } from "react";
import { Button, Stack } from "@mui/material";

interface BoardSectionControlsProps {
  onAddTask: () => void;
  onDeleteSection: () => void;
}

const BoardSectionControls: FC<BoardSectionControlsProps> = ({
  onAddTask,
  onDeleteSection,
}) => {
  return (
    <Stack direction="row">
      <Button onClick={onAddTask}>Add Task</Button>
      <Button onClick={onDeleteSection}>Delete Section</Button>
    </Stack>
  );
};

export default BoardSectionControls;
