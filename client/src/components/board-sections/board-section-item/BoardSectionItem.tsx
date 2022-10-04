import { FC } from "react";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionItemProps {
  boardSection: BoardSection;
  boardId: number;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({
  boardSection,
  boardId,
}) => {
  const { title } = boardSection;

  return (
    <div>
      <p>{title}</p>
      <TasksList boardId={boardId} />
    </div>
  );
};

export default BoardSectionItem;
