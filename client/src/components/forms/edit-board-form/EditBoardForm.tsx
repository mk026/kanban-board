import { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

interface EditBoardFormProps {
  board: Board;
}

const EditBoardForm: FC<EditBoardFormProps> = ({ board }) => {
  const { boardStore, uiStore } = useStore();
  const methods = useForm<BoardFormValues>({
    mode: "onBlur",
    defaultValues: { title: board.title, description: board.description },
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleEditBoardForm();

  const editBoardHandler = async (values: BoardFormValues) => {
    await boardStore.updateBoard(board.id, values);
    methods.reset();
    closeFormHandler();
  };

  const { isLoading } = boardStore;

  return (
    <Dialog open={uiStore.editBoardFormIsActive} onClose={closeFormHandler}>
      <DialogTitle>Edit board</DialogTitle>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(editBoardHandler)}>
          <DialogContent>
            <FormField label="Board title" name="title" />
            <FormField label="Board description" name="description" />
          </DialogContent>
          <DialogActions>
            <LoadingButton isLoading={isLoading}>Save</LoadingButton>
            <Button type="button" onClick={closeFormHandler}>
              Close
            </Button>
          </DialogActions>
        </Box>
      </FormProvider>
    </Dialog>
  );
};

export default observer(EditBoardForm);
