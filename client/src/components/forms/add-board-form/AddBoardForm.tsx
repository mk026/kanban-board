import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  BoardFormValues,
  boardValidationSchema,
} from "../../../validation/boardValidation";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

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
      <Form
        formMethods={methods}
        onSubmit={methods.handleSubmit(addBoardHandler)}
      >
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
      </Form>
    </Dialog>
  );
};

export default observer(AddBoardForm);
