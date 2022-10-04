import { FC, useEffect } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item/BoardSectionItem";

interface BoardSectionsListProps {
  boardId: number;
}

const BoardSectionsList: FC<BoardSectionsListProps> = ({ boardId }) => {
  const { boardSectionStore, taskStore } = useStore();

  useEffect(() => {
    boardSectionStore.fetchBoardSections(boardId);
    taskStore.fetchTasks(boardId);
  }, [boardSectionStore, taskStore, boardId]);

  if (boardSectionStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {boardSectionStore.boardSections.map((boardSection) => (
        <BoardSectionItem key={boardSection.id} boardSection={boardSection} />
      ))}
    </List>
  );
};

export default observer(BoardSectionsList);
