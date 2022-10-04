import { FC } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import TaskItem from "../task-item/TaskItem";
import { useStore } from "../../../hooks/useStore";

interface TasksListProps {
  sectionId: number;
}

const TasksList: FC<TasksListProps> = ({ sectionId }) => {
  const { taskStore } = useStore();

  if (taskStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {taskStore.getTasksForSection(sectionId).map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default observer(TasksList);
