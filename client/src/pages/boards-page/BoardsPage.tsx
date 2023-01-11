import { FC, useEffect } from "react";
import { Typography } from "@mui/material";

import BoardsListControls from "../../components/boards/boards-list-controls/BoardsListControls";
import BoardsList from "../../components/boards/boards-list/BoardsList";
import AddBoardForm from "../../components/forms/add-board-form/AddBoardForm";
import { useStore } from "../../hooks/useStore";

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
