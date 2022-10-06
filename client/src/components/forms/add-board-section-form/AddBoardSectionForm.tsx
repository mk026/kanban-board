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

interface AddBoardSectionFormProps {
  board: Board;
  open: boolean;
  onClose: () => void;
}

const AddBoardSectionForm: FC<AddBoardSectionFormProps> = ({
  board,
  open,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const addBoardSectionHandler = (values: BoardSectionFormValues) => {
    board.addBoardSection(values);
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
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddBoardSectionForm;
