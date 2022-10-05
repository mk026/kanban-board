import { FC } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../hooks/useStore";
import BoardSectionItem from "../board-section-item/BoardSectionItem";

const BoardSectionsList: FC = () => {
  const { boardSectionStore } = useStore();

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
