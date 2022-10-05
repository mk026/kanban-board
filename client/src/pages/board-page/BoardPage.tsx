import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

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
    <>
      <Typography>BoardPage for board {board?.title}</Typography>
      <BoardSectionsList />
    </>
  );
};

export default BoardPage;
