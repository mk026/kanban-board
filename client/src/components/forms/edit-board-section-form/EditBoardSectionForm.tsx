import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { observer } from "mobx-react-lite";

import { BoardSection } from "../../../store/board-section/BoardSection";
import { useEditBoardSectionForm } from "../../../hooks/useEditBoardSectionForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface EditBoardSectionFormProps {
  boardSection: BoardSection;
  open: boolean;
  onClose: () => void;
}

const EditBoardSectionForm: FC<EditBoardSectionFormProps> = ({
  boardSection,
  open,
  onClose,
}) => {
  const { formMethods, onSubmit, isLoading } = useEditBoardSectionForm(
    boardSection,
    onClose
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit section</DialogTitle>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <DialogContent>
          <FormField label="Section title" name="title" />
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

export default observer(EditBoardSectionForm);
