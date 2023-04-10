import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import { useAddBoardForm } from "../../../hooks/useAddBoardForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const AddBoardForm: FC = () => {
  const { formMethods, onSubmit, isLoading, isOpen, onClose } =
    useAddBoardForm();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add new board</DialogTitle>
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

export default observer(AddBoardForm);
