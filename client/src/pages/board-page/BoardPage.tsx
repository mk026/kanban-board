import { FC } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";

export type BoardPageParams = "id";

const BoardPage: FC = () => {
  const params = useParams<BoardPageParams>();

  return (
    <>
      <Typography>BoardPage for board {params.id}</Typography>
      <BoardSectionsList boardId={+params.id!} />
    </>
  );
};

export default BoardPage;
