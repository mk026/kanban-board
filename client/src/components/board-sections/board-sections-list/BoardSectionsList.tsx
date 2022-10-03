import { FC, useEffect } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item/BoardSectionItem";

const BoardSectionsList: FC = () => {
  const { boardSectionStore } = useStore();

  useEffect(() => {
    boardSectionStore.fetchBoardSections();
  }, [boardSectionStore]);

  if (boardSectionStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {boardSectionStore.boardSections.map((boardSection) => (
        <BoardSectionItem boardSection={boardSection} />
      ))}
    </List>
  );
};

export default observer(BoardSectionsList);
