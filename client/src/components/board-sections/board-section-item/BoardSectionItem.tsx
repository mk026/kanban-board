import { FC, useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";
import AddTaskForm from "../../forms/add-task-form/AddTaskForm";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const [addTaskFormIsActive, setAddTaskFormIsActive] = useState(false);

  const { title } = boardSection;
  const tasks = boardSection.getTasks();

  const toggleAddTaskFormHandler = () =>
    setAddTaskFormIsActive((prev) => !prev);
  const removeBoardSectionHandler = () => boardSection.remove();

  return (
    <Card>
      <Typography>{title}</Typography>
      <Button onClick={toggleAddTaskFormHandler}>Add Task</Button>
      <Button onClick={removeBoardSectionHandler}>Delete Section</Button>
      <AddTaskForm
        open={addTaskFormIsActive}
        onClose={toggleAddTaskFormHandler}
        boardSection={boardSection}
      />
      <TasksList tasks={tasks} />
    </Card>
  );
};

export default observer(BoardSectionItem);
