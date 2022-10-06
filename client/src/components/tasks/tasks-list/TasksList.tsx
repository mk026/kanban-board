import { FC } from "react";
import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";

import TaskItem from "../task-item/TaskItem";
import { Task } from "../../../store/task/Task";

interface TasksListProps {
  tasks: Task[];
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {
  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default observer(TasksList);
