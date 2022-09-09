import { List } from "@mui/material";
import { FC } from "react";
import BoardItem from "../board-item/BoardItem";

const BoardsList: FC = () => {
  const boards = [
    {
      id: 1,
      title: "Dummy board 1",
      description: "Description of dummy board 1",
    },
    {
      id: 2,
      title: "Dummy board 2",
      description: "Description of dummy board 2",
    },
    {
      id: 3,
      title: "Dummy board 3",
      description: "Description of dummy board 3",
    },
  ];

  return (
    <List>
      {boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </List>
  );
};

export default BoardsList;
