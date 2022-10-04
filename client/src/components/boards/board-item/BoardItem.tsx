import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";

import { Paths } from "../../../routes";
import { Board } from "../../../store/board/Board";

export interface BoardItemProps {
  board: Board;
}

const BoardItem: FC<BoardItemProps> = ({ board }) => {
  const navigate = useNavigate();

  const selectBoardHandler = () => navigate(`${Paths.BOARDS_PATH}/${board.id}`);

  return (
    <Card variant="outlined">
      <Typography variant="h2">{board.title}</Typography>
      <Typography variant="body1">{board.description}</Typography>
      <Button onClick={selectBoardHandler}>Select board</Button>
    </Card>
  );
};

export default BoardItem;
