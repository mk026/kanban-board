import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

import TaskItem from "../task-item";
import { Task } from "../../../store/task/Task";
import { BoardSection } from "../../../store/board-section/BoardSection";

import classes from "./TasksList.module.scss";

interface TasksListProps {
  tasks: Task[];
  boardSection: BoardSection;
}

const TasksList: FC<TasksListProps> = ({ tasks, boardSection }) => {
  const [, drop] = useDrop<Task>(() => ({
    accept: "task",
    drop: () => boardSection,
  }));

  if (tasks.length === 0) {
    return (
      <Box ref={drop} className={classes.fallback}>
        <Typography>No tasks</Typography>
      </Box>
    );
  }

  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default observer(TasksList);
