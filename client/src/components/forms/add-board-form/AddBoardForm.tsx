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

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";

const AddBoardForm: FC = () => {
  const { boardStore, uiStore } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BoardFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardForm();

  const addBoardHandler = async (values: BoardFormValues) => {
    await boardStore.createBoard(values);
    reset();
    closeFormHandler();
  };

  const { isLoading } = boardStore;

  return (
    <Dialog open={uiStore.addBoardFormIsActive} onClose={closeFormHandler}>
      <DialogTitle>Add new board</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(addBoardHandler)}>
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

export default observer(AddBoardForm);
