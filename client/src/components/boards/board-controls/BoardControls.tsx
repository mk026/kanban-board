import { FC } from "react";
import { Button, Stack } from "@mui/material";

import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";

import classes from "./BoardControls.module.scss";

interface BoardControlsProps {
  board: Board;
}

const BoardControls: FC<BoardControlsProps> = ({ board }) => {
  const { uiStore } = useStore();

  const toggleAddBoardSectionFormHandler = () =>
    uiStore.toggleAddBoardSectionForm();

  const toggleEditBoardFormHandler = () => uiStore.toggleEditBoardForm();

  const removeBoardHandler = () => board.remove();

  return (
    <Stack direction="row" className={classes.controls}>
      <Button onClick={toggleAddBoardSectionFormHandler}>Add Section</Button>
      <Button onClick={toggleEditBoardFormHandler}>Edit Board</Button>
      <Button onClick={removeBoardHandler}>Delete Board</Button>
    </Stack>
  );
};

export default BoardControls;
