import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrag, useDrop } from "react-dnd";

import { Task } from "../../../store/task/Task";

export interface BoardItemProps {
  task: Task;
}

const TaskItem: FC<BoardItemProps> = ({ task }) => {
  const [, drag] = useDrag<Task, Task>(() => ({
    type: "task",
    item: task,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult();
        task.move(dropResult!);
        console.log(item, dropResult);
      }
    },
  }));
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: () => task,
  }));

  const deleteTaskHandler = () => task.remove();

  return (
    <Card
      variant="outlined"
      ref={(node) => drag(drop(node))}
      sx={{ cursor: "move" }}
    >
      <Typography variant="h2">{task.title}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Button onClick={deleteTaskHandler}>Delete</Button>
    </Card>
  );
};

export default observer(TaskItem);
