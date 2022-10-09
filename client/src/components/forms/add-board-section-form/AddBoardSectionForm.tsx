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
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";
import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";

interface AddBoardSectionFormProps {
  board: Board;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onError: () => void;
}

const AddBoardSectionForm: FC<AddBoardSectionFormProps> = ({
  board,
  open,
  onClose,
  onSuccess,
  onError,
}) => {
  const { boardSectionStore } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const addBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await board.addBoardSection(values);
    if (boardSectionStore.error) {
      onError();
    } else {
      onSuccess();
    }
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new section</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(addBoardSectionHandler)}>
        <DialogContent>
          <TextField
            label="Section title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            disabled={boardSectionStore.isLoading}
            endIcon={
              boardSectionStore.isLoading && (
                <CircularProgress size="1rem" color="inherit" />
              )
            }
          >
            Submit
          </Button>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default observer(AddBoardSectionForm);
