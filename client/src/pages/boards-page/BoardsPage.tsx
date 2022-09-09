import { Typography } from "@mui/material";
import { FC } from "react";
import BoardsList from "../../components/boards/boards-list/BoardsList";

const BoardsPage: FC = () => {
  return (
    <>
      <Typography variant="h1">BoardsPage</Typography>
      <BoardsList />
    </>
  );
};

export default BoardsPage;
