import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { IBoard } from "../../../models/IBoard";

export interface BoardItemProps {
  board: IBoard;
}

const BoardItem: FC<BoardItemProps> = ({ board }) => {
  return (
    <Card variant="outlined">
      <Typography variant="h2">{board.title}</Typography>
      <Typography variant="body1">{board.description}</Typography>
      <Button>Select board</Button>
    </Card>
  );
};

export default BoardItem;
