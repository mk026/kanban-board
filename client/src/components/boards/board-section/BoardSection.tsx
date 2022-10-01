import { FC } from "react";
import { IBoardSection } from "../../../store/models/BoardSection";
import TasksList from "../../tasks/tasks-list/TasksList";

interface BoardSectionProps {
  boardSection: IBoardSection;
}

const BoardSection: FC<BoardSectionProps> = ({ boardSection }) => {
  const { title } = boardSection;

  return (
    <div>
      <p>{title}</p>
      <TasksList />
    </div>
  );
};

export default BoardSection;
