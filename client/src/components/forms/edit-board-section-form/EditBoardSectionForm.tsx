import { FC } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BoardSectionFormValues>({
    mode: "onBlur",
    defaultValues: { title: boardSection.title },
    resolver: yupResolver(boardSectionValidationSchema),
  });

  const editBoardSectionHandler = async (values: BoardSectionFormValues) => {
    await boardSectionStore.updateBoardSection({ ...boardSection, ...values });
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit section</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(editBoardSectionHandler)}>
        <DialogContent>
          <TextField
            label="Section title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
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
    </Dialog>
  );
};

export default observer(EditBoardSectionForm);
