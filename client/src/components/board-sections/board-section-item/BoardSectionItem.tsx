import { FC, useState } from "react";
import { Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";
import AddTaskForm from "../../forms/add-task-form/AddTaskForm";
import BoardSectionControls from "../board-section-controls/BoardSectionControls";
import EditBoardSectionForm from "../../forms/edit-board-section-form/EditBoardSectionForm";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const [addTaskFormIsActive, setAddTaskFormIsActive] = useState(false);
  const [editSectionFormIsActive, setEditSectionFormIsActive] = useState(false);

  const { title } = boardSection;
  const tasks = boardSection.getTasks();

  const toggleAddTaskFormHandler = () =>
    setAddTaskFormIsActive((prev) => !prev);
  const toggleEditSectionFormHandler = () =>
    setEditSectionFormIsActive((prev) => !prev);
  const removeBoardSectionHandler = () => boardSection.remove();

  return (
    <Card>
      <Typography>{title}</Typography>
      <BoardSectionControls
        onAddTask={toggleAddTaskFormHandler}
        onEditSection={toggleEditSectionFormHandler}
        onDeleteSection={removeBoardSectionHandler}
      />
      <TasksList tasks={tasks} boardSection={boardSection} />
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
