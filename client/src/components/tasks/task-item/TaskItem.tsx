import { FC, useState } from "react";
import { Button, Card, Collapse, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrag, useDrop } from "react-dnd";

import { Task } from "../../../store/task/Task";
import { BoardSection } from "../../../store/board-section/BoardSection";
import EditTaskForm from "../../forms/edit-task-form/EditTaskForm";
import TaskPlaceholder from "../task-placeholder/TaskPlaceholder";

export interface BoardItemProps {
  task: Task;
}

const TaskItem: FC<BoardItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [{ isDragging }, drag] = useDrag<
    Task,
    Task | BoardSection,
    { isDragging: boolean }
  >(() => ({
    type: "task",
    item: task,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult();
        task.move(dropResult!);
        console.log(item, dropResult);
      }
    },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: () => task,
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }));

  const toggleEditView = () => setIsEditing((prev) => !prev);
  const deleteTaskHandler = () => task.remove();

  if (isDragging) {
    return null;
  }

  return (
    <>
      <Collapse in={!isEditing}>
        <Card
          variant="outlined"
          ref={(node) => drag(drop(node))}
          sx={{ cursor: "move" }}
        >
          <TaskPlaceholder open={isOver} />
          <Typography variant="h2">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
          <Button onClick={toggleEditView}>Edit</Button>
          <Button onClick={deleteTaskHandler}>Delete</Button>
          <TaskPlaceholder open={isOver} />
        </Card>
      </Collapse>
      <EditTaskForm open={isEditing} task={task} onClose={toggleEditView} />
    </>
  );
};

export default observer(TaskItem);
