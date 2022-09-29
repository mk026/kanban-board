import { FC } from "react";
import { List } from "@mui/material";

import { ITask } from "../../../models/ITask";
import TaskItem from "../task-item/TaskItem";

const TasksList: FC = () => {
  const dummyTasks: ITask[] = [
    {
      id: 1,
      title: "Dummy task 1",
      description: "Description of dummy task 1",
    },
    {
      id: 2,
      title: "Dummy task 2",
      description: "Description of dummy task 2",
    },
    {
      id: 3,
      title: "Dummy task 3",
      description: "Description of dummy task 3",
    },
  ];

  return (
    <List>
      {dummyTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TasksList;
