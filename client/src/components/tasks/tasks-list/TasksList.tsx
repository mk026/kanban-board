import { FC, useMemo } from "react";
import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";

import TaskItem from "../task-item/TaskItem";
import { BoardSection } from "../../../store/board-section/BoardSection";

interface TasksListProps {
  boardSection: BoardSection;
}

const TasksList: FC<TasksListProps> = ({ boardSection }) => {
  const tasks = useMemo(() => boardSection.getTasks(), [boardSection]);

  return (
    <Stack>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default observer(TasksList);
