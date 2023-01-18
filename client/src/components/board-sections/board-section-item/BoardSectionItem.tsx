import { FC, useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list";
import AddTaskForm from "../../forms/add-task-form";
import BoardSectionControls from "../board-section-controls";
import EditBoardSectionForm from "../../forms/edit-board-section-form";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const [addTaskFormIsActive, setAddTaskFormIsActive] = useState(false);
  const [editSectionFormIsActive, setEditSectionFormIsActive] = useState(false);

  useEffect(() => {
    boardSection.fetchTasks();
  }, [boardSection]);

  const toggleAddTaskFormHandler = () =>
    setAddTaskFormIsActive((prev) => !prev);
  const toggleEditSectionFormHandler = () =>
    setEditSectionFormIsActive((prev) => !prev);
  const removeBoardSectionHandler = () => boardSection.remove();

  return (
    <Card>
      <Typography>{boardSection.title}</Typography>
      <BoardSectionControls
        onAddTask={toggleAddTaskFormHandler}
        onEditSection={toggleEditSectionFormHandler}
        onDeleteSection={removeBoardSectionHandler}
      />
      <TasksList tasks={boardSection.tasks} boardSection={boardSection} />
      <AddTaskForm
        open={addTaskFormIsActive}
        onClose={toggleAddTaskFormHandler}
        boardSection={boardSection}
      />
      <EditBoardSectionForm
        open={editSectionFormIsActive}
        onClose={toggleEditSectionFormHandler}
        boardSection={boardSection}
      />
    </Card>
  );
};

export default observer(BoardSectionItem);
