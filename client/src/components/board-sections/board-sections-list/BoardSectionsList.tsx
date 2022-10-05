import { FC } from "react";
import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item/BoardSectionItem";

const BoardSectionsList: FC = () => {
  const { boardSectionStore } = useStore();

  if (boardSectionStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Stack direction="row" spacing={10}>
      {boardSectionStore.boardSections.map((boardSection) => (
        <BoardSectionItem key={boardSection.id} boardSection={boardSection} />
      ))}
    </Stack>
  );
};

export default observer(BoardSectionsList);
