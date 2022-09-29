import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { ITask } from "../../../models/ITask";

export interface BoardItemProps {
  task: ITask;
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
