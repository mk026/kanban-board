import { FC } from "react";
import { Card, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const { title } = boardSection;

  return (
    <Card>
      <Typography>{title}</Typography>
      <TasksList boardSection={boardSection} />
    </Card>
  );
};

export default observer(BoardSectionItem);
