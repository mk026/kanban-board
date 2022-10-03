import { FC, useEffect } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item/BoardSectionItem";

interface BoardSectionsListProps {
  boardId: number;
}

const BoardSectionsList: FC<BoardSectionsListProps> = ({ boardId }) => {
  const { boardSectionStore } = useStore();

  useEffect(() => {
    boardSectionStore.fetchBoardSections(boardId);
  }, [boardSectionStore, boardId]);

  if (boardSectionStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {boardSectionStore.boardSections.map((boardSection) => (
        <BoardSectionItem
          key={boardSection.id}
          boardSection={boardSection}
          boardId={boardId}
        />
      ))}
    </List>
  );
};

export default observer(BoardSectionsList);
