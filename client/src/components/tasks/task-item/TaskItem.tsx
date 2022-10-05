import { FC } from "react";
import { Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { Task } from "../../../store/task/Task";

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

export default observer(TaskItem);
