import { FC } from "react";
import { Button, Stack } from "@mui/material";

import { useStore } from "../../../hooks/useStore";

const BoardsListControls: FC = () => {
  const { uiStore } = useStore();

  const showAddBoardFormHandler = () => uiStore.toggleAddBoardForm();

  return (
    <Stack>
      <Button onClick={showAddBoardFormHandler}>Add Board</Button>
    </Stack>
  );
};

export default BoardsListControls;
