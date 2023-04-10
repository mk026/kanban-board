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
import { observer } from "mobx-react-lite";

import {
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";
import { useStore } from "../../../hooks/useStore";
import { BoardSection } from "../../../store/board-section/BoardSection";
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
  const { boardStore } = useStore();
  const methods = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    defaultValues: { title: boardSection.title },
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const editBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await boardStore.activeBoard.updateBoardSection(boardSection.id, values);
    methods.reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit section</DialogTitle>
      <Form
        formMethods={methods}
        onSubmit={methods.handleSubmit(editBoardSectionHandler)}
      >
        <DialogContent>
          <FormField label="Section title" name="title" />
        </DialogContent>
        <DialogActions>
          <LoadingButton isLoading={boardSection.isLoading}>Save</LoadingButton>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
};

export default observer(EditBoardSectionForm);
