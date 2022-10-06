import { FC, useEffect, useState } from "react";
import { Button, Container, List } from "@mui/material";
import { observer } from "mobx-react-lite";

import BoardItem from "../board-item/BoardItem";
import { useStore } from "../../../hooks/useStore";
import AddBoardForm from "../../forms/add-board-form/AddBoardForm";

const BoardsList: FC = () => {
  const { boardStore } = useStore();
  const [addBoardFormIsActive, setAddBoardFormIsActive] = useState(false);

  useEffect(() => {
    boardStore.fetchBoards();
  }, [boardStore]);

  const toggleAddBoardFormHandler = () =>
    setAddBoardFormIsActive((prev) => !prev);

  if (boardStore.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Button onClick={toggleAddBoardFormHandler}>Add Board</Button>
      {addBoardFormIsActive && <AddBoardForm />}
      <List>
        {boardStore.boards.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
      </List>
    </Container>
  );
};

export default observer(BoardsList);
