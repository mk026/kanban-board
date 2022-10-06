import { FC } from "react";
import { Button, Stack } from "@mui/material";

interface BoardsListControlsProps {
  showAddBoardHandler: () => void;
}

const BoardsListControls: FC<BoardsListControlsProps> = ({
  showAddBoardHandler,
}) => {
  return (
    <Stack>
      <Button onClick={showAddBoardHandler}>Add Board</Button>
    </Stack>
  );
};

export default BoardsListControls;
