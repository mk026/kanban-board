import { FC } from "react";

import { BoardSection } from "../../../store/board-section/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionItemProps {
  boardSection: BoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const { id, title } = boardSection;

  return (
    <div>
      <p>{title}</p>
      <TasksList sectionId={id} />
    </div>
  );
};

export default BoardSectionItem;
