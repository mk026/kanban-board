import { FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { BoardSection } from "../../../store/board-section/BoardSection";
import { useStore } from "../../../hooks/useStore";

interface AddTaskFormProps {
  boardSection: BoardSection;
  open: boolean;
  onClose: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ boardSection, open, onClose }) => {
  const {
    taskStore: { isLoading },
  } = useStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    mode: "onBlur",
    resolver: yupResolver(taskValidationSchema),
  });

  const addTaskHandler = async (values: TaskFormValues) => {
    await boardSection.addTask(values);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new task</DialogTitle>
      <Box component="form" onSubmit={handleSubmit(addTaskHandler)}>
        <DialogContent>
          <TextField
            label="Task title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title && errors.title.message}
          />
          <TextField
            label="Task description"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description && errors.description.message}
          />
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            disabled={isLoading}
            endIcon={
              isLoading && <CircularProgress size="1rem" color="inherit" />
            }
          >
            Submit
          </Button>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddTaskForm;
