import { FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";

interface EditBoardFormProps {
  board: Board;
}

const EditBoardForm: FC<EditBoardFormProps> = ({ board }) => {
  const { boardStore, uiStore } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BoardFormValues>({
    mode: "onBlur",
    defaultValues: { title: board.title, description: board.description },
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleEditBoardForm();

  const editBoardHandler = async (values: BoardFormValues) => {
    await boardStore.updateBoard({ ...board, ...values });
    reset();
    closeFormHandler();
  };

  const { isLoading } = boardStore;

  return (
    <Dialog open={uiStore.editBoardFormIsActive} onClose={closeFormHandler}>
      <DialogTitle>Edit board</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(editBoardHandler)}>
        <DialogContent>
          <TextField
            label="Board title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
          <TextField
            label="Board description (optional)"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            disabled={isLoading}
            endIcon={
              isLoading && <CircularProgress size="1rem" color="inherit" />
            }
          >
            Submit
          </Button>
          <Button type="button" onClick={closeFormHandler}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default observer(EditBoardForm);
