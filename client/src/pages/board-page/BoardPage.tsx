import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";
import AddBoardSectionForm from "../../components/forms/add-board-section-form/AddBoardSectionForm";
import EditBoardForm from "../../components/forms/edit-board-form/EditBoardForm";
import { useStore } from "../../hooks/useStore";
import BoardControls from "../../components/boards/board-controls/BoardControls";

const BoardPage: FC = () => {
  const { id } = useParams<"id">();
  const { boardStore } = useStore();

  useEffect(() => {
    boardStore.fetchActiveBoard(Number(id))!;
  }, [boardStore, id]);

  if (!boardStore.activeBoard) {
    return <p>Loading Board...</p>;
  }

  return (
    <Container>
      <Typography>
        BoardPage for board {boardStore.activeBoard.title}
      </Typography>
      <BoardControls board={boardStore.activeBoard} />
      <AddBoardSectionForm board={boardStore.activeBoard!} />
      <EditBoardForm board={boardStore.activeBoard!} />
      <BoardSectionsList />
    </Container>
  );
};

export default observer(BoardPage);
