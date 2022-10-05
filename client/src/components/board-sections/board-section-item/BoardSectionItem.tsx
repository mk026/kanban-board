import { FC } from "react";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const { title } = boardSection;

  return (
    <div>
      <p>{title}</p>
      <TasksList boardSection={boardSection} />
    </div>
  );
};

export default BoardSectionItem;
