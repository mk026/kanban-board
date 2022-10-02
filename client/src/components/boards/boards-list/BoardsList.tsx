import { FC, useEffect } from "react";
import { List } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardItem from "../board-item/BoardItem";
import { useStore } from "../../../hooks/useStore";

const BoardsList: FC = () => {
  const { boardStore } = useStore();

  useEffect(() => {
    boardStore.fetchBoards();
  }, [boardStore]);

  if (boardStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <List>
      {boardStore.boards.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </List>
  );
};

export default observer(BoardsList);
