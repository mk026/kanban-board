import { FC, useRef, useState } from "react";
import { Button, Card, Collapse, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrag, useDrop } from "react-dnd";

import { Task } from "../../../store/task/Task";
import { BoardSection } from "../../../store/board-section/BoardSection";
import EditTaskForm from "../../forms/edit-task-form/EditTaskForm";
import TaskPlaceholder from "../task-placeholder/TaskPlaceholder";

export interface TaskItemProps {
  task: Task;
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hoveringOnTop, setHoveringOnTop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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
  const [{ isOver }, drop] = useDrop<Task, Task, { isOver: boolean }>(() => ({
    accept: "task",
    drop: () => task,
    collect: (monitor) => ({ isOver: monitor.isOver() }),
    hover: (item, monitor) => {
      const hoverBoundingRect = ref.current!.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (hoverClientY < hoverMiddleY) {
        setHoveringOnTop(true);
      }
      if (hoverClientY > hoverMiddleY) {
        setHoveringOnTop(false);
      }
    },
  }));

  const toggleEditView = () => setIsEditing((prev) => !prev);
  const deleteTaskHandler = () => task.remove();

  if (isDragging) {
    return null;
  }

  return (
    <div ref={(node) => drag(drop(node))}>
      <TaskPlaceholder open={isOver && hoveringOnTop} />
      <Collapse in={!isEditing}>
        <Card variant="outlined" ref={ref} sx={{ cursor: "move" }}>
          <Typography variant="h2">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
          <Button onClick={toggleEditView}>Edit</Button>
          <Button onClick={deleteTaskHandler}>Delete</Button>
        </Card>
      </Collapse>
      <EditTaskForm open={isEditing} task={task} onClose={toggleEditView} />
      <TaskPlaceholder open={isOver && !hoveringOnTop} />
    </div>
  );
};

export default observer(TaskItem);
