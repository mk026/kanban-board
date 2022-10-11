import { FC, useState } from "react";
import { Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDrop } from "react-dnd";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";
import AddTaskForm from "../../forms/add-task-form/AddTaskForm";
import BoardSectionControls from "../board-section-controls/BoardSectionControls";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: () => boardSection,
  }));
  const [addTaskFormIsActive, setAddTaskFormIsActive] = useState(false);

  const { title } = boardSection;
  const tasks = boardSection.getTasks();

  const toggleAddTaskFormHandler = () =>
    setAddTaskFormIsActive((prev) => !prev);
  const removeBoardSectionHandler = () => boardSection.remove();

  return (
    <Card ref={drop}>
      <Typography>{title}</Typography>
      <BoardSectionControls
        onAddTask={toggleAddTaskFormHandler}
        onDeleteSection={removeBoardSectionHandler}
      />
      <TasksList tasks={tasks} />
      <AddTaskForm
        open={addTaskFormIsActive}
        onClose={toggleAddTaskFormHandler}
        boardSection={boardSection}
      />
    </Card>
  );
};

export default observer(BoardSectionItem);
