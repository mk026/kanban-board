import { FC, useState } from "react";
import { Typography } from "@mui/material";

import BoardsListControls from "../../components/boards/boards-list-controls/BoardsListControls";
import BoardsList from "../../components/boards/boards-list/BoardsList";
import AddBoardForm from "../../components/forms/add-board-form/AddBoardForm";

const BoardsPage: FC = () => {
  const [addBoardFormIsActive, setAddBoardFormIsActive] = useState(false);

  const toggleAddBoardFormHandler = () =>
    setAddBoardFormIsActive((prev) => !prev);

  return (
    <>
      <Typography variant="h1">BoardsPage</Typography>
      <BoardsListControls showAddBoardHandler={toggleAddBoardFormHandler} />
      <AddBoardForm
        open={addBoardFormIsActive}
        onClose={toggleAddBoardFormHandler}
      />
      <BoardsList />
    </>
  );
};

export default BoardsPage;
