import { FC, useEffect } from "react";
import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item";

const BoardSectionsList: FC = () => {
  const { boardStore } = useStore();

  useEffect(() => {
    boardStore.activeBoard.fetchBoardSections();
  }, [boardStore]);

  if (boardStore.isLoading) {
    return <p>Loading Sections...</p>;
  }

  return (
    <Stack direction="row" spacing={10}>
      {boardStore.activeBoard.boardSections.map((boardSection) => (
        <BoardSectionItem key={boardSection.id} boardSection={boardSection} />
      ))}
    </Stack>
  );
};

export default observer(BoardSectionsList);
