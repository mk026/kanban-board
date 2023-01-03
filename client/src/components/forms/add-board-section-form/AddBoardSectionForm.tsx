import { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";
import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import LoadingButton from "../../loading-button/LoadingButton";

interface AddBoardSectionFormProps {
  board: Board;
}

const AddBoardSectionForm: FC<AddBoardSectionFormProps> = ({ board }) => {
  const { boardSectionStore, uiStore } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardSectionForm();

  const addBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await board.addBoardSection(values);
    reset();
    closeFormHandler();
  };

  return (
    <Dialog
      open={uiStore.addBoardSectionFormIsActive}
      onClose={closeFormHandler}
    >
      <DialogTitle>Add new section</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(addBoardSectionHandler)}>
        <DialogContent>
          <TextField
            label="Section title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton isLoading={boardSectionStore.isLoading}>
            Save
          </LoadingButton>
          <Button type="button" onClick={closeFormHandler}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default observer(AddBoardSectionForm);
