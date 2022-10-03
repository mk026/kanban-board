import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { Task } from "../../../store/models/Task";

export interface BoardItemProps {
  task: Task;
}

const TaskItem: FC<BoardItemProps> = ({ task }) => {
  return (
    <Card variant="outlined">
      <Typography variant="h2">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
    </Card>
  );
};

export default TaskItem;
