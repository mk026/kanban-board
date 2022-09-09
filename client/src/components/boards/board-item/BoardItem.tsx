import { Button, Card, Typography } from "@mui/material";
import { FC } from "react";

export interface BoardItemProps {
  board: { id: number; title: string; description: string };
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
