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
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";

interface AddBoardFormProps {
  open: boolean;
  onClose: () => void;
}

const AddBoardForm: FC<AddBoardFormProps> = ({ open, onClose }) => {
  const { boardStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardValidationSchema),
  });

  const addBoardHandler = (values: BoardFormValues) => {
    boardStore.createBoard(values);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new board</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(addBoardHandler)}>
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
          {boardStore.isLoading && <span>Loading...</span>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default observer(AddBoardForm);
