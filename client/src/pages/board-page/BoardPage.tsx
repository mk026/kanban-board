import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useStore } from "../../hooks/useStore";
import BoardSectionsList from "../../components/board-sections/board-sections-list";
import AddBoardSectionForm from "../../components/forms/add-board-section-form";
import EditBoardForm from "../../components/forms/edit-board-form";
import BoardControls from "../../components/boards/board-controls";
import PageTitle from "../../components/page-title";

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
      <PageTitle>BoardPage for board {boardStore.activeBoard.title}</PageTitle>
      <BoardControls board={boardStore.activeBoard} />
      <AddBoardSectionForm board={boardStore.activeBoard!} />
      <EditBoardForm board={boardStore.activeBoard!} />
      <BoardSectionsList />
    </Container>
  );
};

export default observer(BoardPage);
