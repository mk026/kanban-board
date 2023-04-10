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
import { useEditBoardForm } from "../../../hooks/useEditBoardForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface EditBoardFormProps {
  board: Board;
}

const EditBoardForm: FC<EditBoardFormProps> = ({ board }) => {
  const { formMethods, onSubmit, isLoading, isOpen, onClose } =
    useEditBoardForm(board);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit board</DialogTitle>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <DialogContent>
          <FormField label="Board title" name="title" />
          <FormField label="Board description" name="description" />
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

export default observer(EditBoardForm);
