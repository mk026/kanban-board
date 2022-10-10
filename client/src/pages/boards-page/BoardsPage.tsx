import { FC } from "react";
import { Typography } from "@mui/material";

import BoardsListControls from "../../components/boards/boards-list-controls/BoardsListControls";
import BoardsList from "../../components/boards/boards-list/BoardsList";
import AddBoardForm from "../../components/forms/add-board-form/AddBoardForm";

const BoardsPage: FC = () => {
  return (
    <>
      <Typography variant="h1">BoardsPage</Typography>
      <BoardsListControls />
      <AddBoardForm />
      <BoardsList />
    </>
  );
};

export default BoardsPage;
