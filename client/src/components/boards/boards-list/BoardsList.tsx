import { FC } from "react";
import { Container, List } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardItem from "../board-item/BoardItem";
import { Board } from "../../../store/board/Board";

interface BoardsListProps {
  boards: Board[];
}

const BoardsList: FC<BoardsListProps> = ({ boards }) => {
  return (
    <Container>
      <List>
        {boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
      </List>
    </Container>
  );
};

export default observer(BoardsList);
