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
  BoardSectionFormValues,
  boardSectionValidationSchema,
} from "../../../validation/boardSectionValidation";
import { useStore } from "../../../hooks/useStore";
import { BoardSection } from "../../../store/board-section/BoardSection";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

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
  const { boardSectionStore } = useStore();
  const methods = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    defaultValues: { title: boardSection.title },
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const editBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await boardSectionStore.updateBoardSection({ ...boardSection, ...values });
    methods.reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit section</DialogTitle>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(editBoardSectionHandler)}
        >
          <DialogContent>
            <FormField label="Section title" name="title" />
          </DialogContent>
          <DialogActions>
            <LoadingButton isLoading={boardSectionStore.isLoading}>
              Save
            </LoadingButton>
            <Button type="button" onClick={onClose}>
              Close
            </Button>
          </DialogActions>
        </Box>
      </FormProvider>
    </Dialog>
  );
};

export default observer(EditBoardSectionForm);
