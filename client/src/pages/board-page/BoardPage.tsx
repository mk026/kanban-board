import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Fade,
  Typography,
} from "@mui/material";

import BoardSectionsList from "../../components/board-sections/board-sections-list/BoardSectionsList";
import AddBoardSectionForm from "../../components/forms/add-board-section-form/AddBoardSectionForm";
import { useStore } from "../../hooks/useStore";

const BoardPage: FC = () => {
  const { id } = useParams<"id">();
  const { boardStore } = useStore();
  const [addBoardSectionFormIsActive, setAddBoardSectionFormIsActive] =
    useState(false);
  const [successAlertIsActive, setSuccessAlertIsActive] = useState(false);
  const [errorAlertIsActive, setErrorAlertIsActive] = useState(false);

  const toggleAddBoardSectionFormHandler = () =>
    setAddBoardSectionFormIsActive((prev) => !prev);

  const board = boardStore.getBoardById(Number(id));

  const removeBoardHandler = () => board?.remove();

  const onSuccessHandler = () => setSuccessAlertIsActive(true);
  const onErrorHandler = () => setErrorAlertIsActive(true);

  useEffect(() => {
    if (board) {
      board.fetchBoardContent();
    }
  }, [board]);

  useEffect(() => {
    if (successAlertIsActive) {
      setTimeout(() => setSuccessAlertIsActive(false), 5000);
    }
    if (errorAlertIsActive) {
      setTimeout(() => setErrorAlertIsActive(false), 5000);
    }
  }, [successAlertIsActive, errorAlertIsActive]);

  return (
    <Container>
      <Typography>BoardPage for board {board?.title}</Typography>
      <Button onClick={toggleAddBoardSectionFormHandler}>Add Section</Button>
      <Button onClick={removeBoardHandler}>Delete Board</Button>
      <AddBoardSectionForm
        open={addBoardSectionFormIsActive}
        onClose={toggleAddBoardSectionFormHandler}
        board={board!}
        onSuccess={onSuccessHandler}
        onError={onErrorHandler}
      />
      <BoardSectionsList />
      <Fade in={successAlertIsActive}>
        <Alert severity="success" variant="filled">
          <AlertTitle>Success</AlertTitle>
          Successfully added new board section
        </Alert>
      </Fade>
      <Fade in={errorAlertIsActive}>
        <Alert severity="error" variant="filled">
          <AlertTitle>Error</AlertTitle>
          Failed to add new board section
        </Alert>
      </Fade>
    </Container>
  );
};

export default BoardPage;
