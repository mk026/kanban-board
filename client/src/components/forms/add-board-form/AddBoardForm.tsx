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

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

const AddBoardForm: FC = () => {
  const { boardStore, uiStore } = useStore();
  const methods = useForm<BoardFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardForm();

  const addBoardHandler = async (values: BoardFormValues) => {
    await boardStore.createBoard(values);
    methods.reset();
    closeFormHandler();
  };

  const { isLoading } = boardStore;

  return (
    <Dialog open={uiStore.addBoardFormIsActive} onClose={closeFormHandler}>
      <DialogTitle>Add new board</DialogTitle>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(addBoardHandler)}>
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

export default observer(AddBoardForm);
