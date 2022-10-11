import { FC, useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrag } from "react-dnd";

import { Task } from "../../../store/task/Task";
import { BoardSection } from "../../../store/board-section/BoardSection";

export interface BoardItemProps {
  task: Task;
}

const TaskItem: FC<BoardItemProps> = ({ task }) => {
  const [{ drop }, drag] = useDrag(() => ({
    type: "task",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      drop: monitor.getDropResult<BoardSection>(),
    }),
  }));

  useEffect(() => console.log(drop), [drop]);

  const deleteTaskHandler = () => task.remove();

  return (
    <Card variant="outlined" ref={drag} sx={{ cursor: "move" }}>
      <Typography variant="h2">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Button onClick={deleteTaskHandler}>Delete</Button>
    </Card>
  );
};

export default observer(TaskItem);
