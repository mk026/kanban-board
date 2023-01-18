import { FC, useEffect } from "react";
import { Typography } from "@mui/material";

import { useStore } from "../../hooks/useStore";
import BoardsListControls from "../../components/boards/boards-list-controls";
import BoardsList from "../../components/boards/boards-list";
import AddBoardForm from "../../components/forms/add-board-form";

const BoardsPage: FC = () => {
  const { boardStore } = useStore();

  useEffect(() => {
    boardStore.fetchBoards();
  }, [boardStore]);

  return (
    <>
      <Typography variant="h1">BoardsPage</Typography>
      <BoardsListControls />
      <AddBoardForm />
      <BoardsList boards={boardStore.boards} />
    </>
  );
};

export default BoardsPage;
