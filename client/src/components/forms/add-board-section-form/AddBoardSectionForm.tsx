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
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";
import { Board } from "../../../store/board/Board";
import { useStore } from "../../../hooks/useStore";
import { observer } from "mobx-react-lite";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

interface AddBoardSectionFormProps {
  board: Board;
}

const AddBoardSectionForm: FC<AddBoardSectionFormProps> = ({ board }) => {
  const { boardStore, uiStore } = useStore();
  const methods = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const closeFormHandler = () => uiStore.toggleAddBoardSectionForm();

  const addBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await board.createBoardSection({
      ...values,
      boardId: board.id,
      order: boardStore.activeBoard.newSectionOrder,
    });
    methods.reset();
    closeFormHandler();
  };

  return (
    <Dialog
      open={uiStore.addBoardSectionFormIsActive}
      onClose={closeFormHandler}
    >
      <DialogTitle>Add new section</DialogTitle>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(addBoardSectionHandler)}
        >
          <DialogContent>
            <FormField label="Title" name="title" />
            <FormField label="Description" name="description" />
          </DialogContent>
          <DialogActions>
            <LoadingButton isLoading={boardStore.isLoading}>Save</LoadingButton>
            <Button type="button" onClick={closeFormHandler}>
              Close
            </Button>
          </DialogActions>
        </Box>
      </FormProvider>
    </Dialog>
  );
};

export default observer(AddBoardSectionForm);
