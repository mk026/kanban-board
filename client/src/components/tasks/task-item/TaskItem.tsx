import { FC, useState } from "react";
import { Button, Card, Collapse, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { Task } from "../../../store/task/Task";
import { useTaskDnD } from "../../../hooks/useTaskDnD";
import EditTaskForm from "../../forms/edit-task-form";
import TaskPlaceholder from "../task-placeholder";

export interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { dndRef, taskRef, isDragging, isOver, isHoveringOnTop } =
    useTaskDnD(task);

  const toggleEditView = () => setIsEditing((prev) => !prev);
  const deleteTaskHandler = () => task.remove();

  if (isDragging) {
    return null;
  }

  return (
    <div ref={dndRef}>
      <TaskPlaceholder open={isOver && isHoveringOnTop} />
      <Collapse in={!isEditing}>
        <Card variant="outlined" ref={taskRef} sx={{ cursor: "move" }}>
          <Typography variant="h2">{task.title}</Typography>
          <Typography variant="h6">Order: {task.order}</Typography>
          <Typography variant="h6">
            Current direction state: {isHoveringOnTop ? "top" : "bottom"}
          </Typography>
          <Typography variant="body1">{task.description}</Typography>
          <Button onClick={toggleEditView}>Edit</Button>
          <Button onClick={deleteTaskHandler}>Delete</Button>
        </Card>
      </Collapse>
      <EditTaskForm open={isEditing} task={task} onClose={toggleEditView} />
      <TaskPlaceholder open={isOver && !isHoveringOnTop} />
    </div>
  );
};

export default observer(TaskItem);
