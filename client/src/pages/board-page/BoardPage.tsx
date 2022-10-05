import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";
import { useStore } from "../../hooks/useStore";

const BoardPage: FC = () => {
  const { id } = useParams<"id">();
  const { boardStore } = useStore();

  const board = boardStore.getBoardById(Number(id));

  useEffect(() => {
    if (board) {
      board.fetchBoardContent();
    }
  }, [board]);

  return (
    <Container>
      <Typography>BoardPage for board {board?.title}</Typography>
      <BoardSectionsList />
    </Container>
  );
};

export default BoardPage;
