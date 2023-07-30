import { FC } from "react";
import { Button, Stack } from "@mui/material";

import { useStore } from "../../../hooks/useStore";

import classes from "./BoardsListControls.module.scss";

const BoardsListControls: FC = () => {
  const { uiStore } = useStore();

  const showAddBoardFormHandler = () => uiStore.toggleAddBoardForm();

  return (
    <Stack className={classes.controls}>
      <Button onClick={showAddBoardFormHandler}>Add Board</Button>
    </Stack>
  );
};

export default BoardsListControls;
