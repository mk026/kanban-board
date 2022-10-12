import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrag } from "react-dnd";

import { Task } from "../../../store/task/Task";
import { BoardSection } from "../../../store/board-section/BoardSection";

export interface BoardItemProps {
  task: Task;
}

const TaskItem: FC<BoardItemProps> = ({ task }) => {
  const [, drag] = useDrag<Pick<Task, "id">, BoardSection>(() => ({
    type: "task",
    item: { id: task.id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      const didDrop = monitor.didDrop();
      console.log(item, dropResult, didDrop);
    },
  }));

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
