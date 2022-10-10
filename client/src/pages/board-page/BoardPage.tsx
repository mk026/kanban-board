import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";
import AddBoardSectionForm from "../../components/forms/add-board-section-form/AddBoardSectionForm";
import { useStore } from "../../hooks/useStore";

const BoardPage: FC = () => {
  const { id } = useParams<"id">();
  const { boardStore, uiStore } = useStore();

  const board = boardStore.getBoardById(Number(id));

  const toggleAddBoardSectionFormHandler = () =>
    uiStore.toggleAddBoardSectionForm();

  const removeBoardHandler = () => board?.remove();

  useEffect(() => {
    if (board) {
      board.fetchBoardContent();
    }
  }, [board]);

  return (
    <Container>
      <Typography>BoardPage for board {board?.title}</Typography>
      <Button onClick={toggleAddBoardSectionFormHandler}>Add Section</Button>
      <Button onClick={removeBoardHandler}>Delete Board</Button>
      <AddBoardSectionForm board={board!} />
      <BoardSectionsList />
    </Container>
  );
};

export default observer(BoardPage);
