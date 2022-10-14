import { FC } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { Task } from "../../../store/task/Task";
import { useStore } from "../../../hooks/useStore";

interface AddTaskFormProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ task, open, onClose }) => {
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
    defaultValues: { title: task.title, description: task.description },
    resolver: yupResolver(taskValidationSchema),
  });

  const addTaskHandler = async (values: TaskFormValues) => {
    console.log(values);
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
          helperText={errors.title && errors.title.message}
        />
        <TextField
          label="Task description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
        />
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
      </Box>
    </Collapse>
  );
};

export default AddTaskForm;
