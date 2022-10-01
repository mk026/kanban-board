import { FC } from "react";
import { IBoardSection } from "../../../store/models/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionItemProps {
  boardSection: IBoardSection;
}

const BoardSectionItem: FC<BoardSectionItemProps> = ({ boardSection }) => {
  const { title } = boardSection;

  return (
    <div>
      <p>{title}</p>
      <TasksList />
    </div>
  );
};

export default BoardSectionItem;
