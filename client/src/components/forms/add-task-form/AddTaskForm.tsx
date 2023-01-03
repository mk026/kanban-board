import { FC } from "react";
import { Box, Button, Collapse, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { BoardSection } from "../../../store/board-section/BoardSection";
import { useStore } from "../../../hooks/useStore";
import LoadingButton from "../../loading-button/LoadingButton";

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
    <Collapse in={open}>
      <Box component="form" onSubmit={handleSubmit(addTaskHandler)}>
        <TextField
          label="Task title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          label="Task description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <LoadingButton isLoading={isLoading}>Save</LoadingButton>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Collapse>
  );
};

export default AddTaskForm;
