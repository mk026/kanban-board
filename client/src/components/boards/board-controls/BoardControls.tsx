import { FC } from "react";
import { Button, Stack } from "@mui/material";

import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";

interface BoardControlsProps {
  board: Board;
}

const BoardControls: FC<BoardControlsProps> = ({ board }) => {
  const { uiStore } = useStore();

  const toggleAddBoardSectionFormHandler = () =>
    uiStore.toggleAddBoardSectionForm();

  const removeBoardHandler = () => board.remove();

  return (
    <Stack direction="row">
      <Button onClick={toggleAddBoardSectionFormHandler}>Add Section</Button>
      <Button onClick={removeBoardHandler}>Delete Board</Button>
    </Stack>
  );
};

export default BoardControls;
