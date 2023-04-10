import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import { Board } from "../../../store/board/Board";
import { useAddBoardSectionForm } from "../../../hooks/useAddBoardSectionForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface AddBoardSectionFormProps {
  board: Board;
}

const AddBoardSectionForm: FC<AddBoardSectionFormProps> = ({ board }) => {
  const { formMethods, onSubmit, isLoading, isOpen, onClose } =
    useAddBoardSectionForm(board);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add new section</DialogTitle>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <DialogContent>
          <FormField label="Title" name="title" />
          <FormField label="Description" name="description" />
        </DialogContent>
        <DialogActions>
          <LoadingButton isLoading={isLoading}>Save</LoadingButton>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default observer(AddBoardSectionForm);
