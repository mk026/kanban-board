import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@mui/material";

import { Paths } from "../../../routes";
import { Board } from "../../../store/board/Board";

import classes from "./BoardItem.module.scss";

export interface BoardItemProps {
  board: Board;
}

const BoardItem: FC<BoardItemProps> = ({ board }) => {
  const navigate = useNavigate();

  const selectBoardHandler = () => navigate(`${Paths.BOARDS_PATH}/${board.id}`);
  const removeBoardHandler = () => board.remove();

  return (
    <Card variant="outlined" className={classes.item}>
      <Typography variant="h2">{board.title}</Typography>
      <Typography variant="body1">{board.description}</Typography>
      <Button onClick={selectBoardHandler}>Select board</Button>
      <Button onClick={removeBoardHandler}>Delete board</Button>
    </Card>
  );
};

export default BoardItem;
