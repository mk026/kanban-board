import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";
import AddBoardSectionForm from "../../components/forms/add-board-section-form/AddBoardSectionForm";
import { useStore } from "../../hooks/useStore";
import BoardControls from "../../components/boards/board-controls/BoardControls";

const BoardPage: FC = () => {
  const { id } = useParams<"id">();
  const { boardStore } = useStore();

  const board = boardStore.getBoardById(Number(id))!;

  useEffect(() => {
    if (board) {
      board.fetchBoardContent();
    }
  }, [board]);

  return (
    <Container>
      <Typography>BoardPage for board {board?.title}</Typography>
      <BoardControls board={board} />
      <AddBoardSectionForm board={board!} />
      <BoardSectionsList />
    </Container>
  );
};

export default observer(BoardPage);
