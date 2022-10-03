import { FC, useEffect } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import TaskItem from "../task-item/TaskItem";
import { useStore } from "../../../hooks/useStore";

interface TasksListProps {
  boardId: number;
}

const TasksList: FC<TasksListProps> = ({ boardId }) => {
  const { taskStore } = useStore();

  useEffect(() => {
    taskStore.fetchTasks(boardId);
  }, [taskStore, boardId]);

  if (taskStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default observer(TasksList);
