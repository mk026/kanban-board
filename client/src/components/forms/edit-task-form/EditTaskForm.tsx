import { FC } from "react";
import { Box, Button, Collapse, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { Task } from "../../../store/task/Task";
import { useStore } from "../../../hooks/useStore";
import LoadingButton from "../../loading-button/LoadingButton";

interface EditTaskFormProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const EditTaskForm: FC<EditTaskFormProps> = ({ task, open, onClose }) => {
  const { taskStore } = useStore();
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

  const editTaskHandler = async (values: TaskFormValues) => {
    await taskStore.updateTask({ ...task, ...values });
    reset();
    onClose();
  };

  return (
    <Collapse in={open}>
      <Box component="form" onSubmit={handleSubmit(editTaskHandler)}>
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
        <LoadingButton isLoading={taskStore.isLoading}>Save</LoadingButton>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Collapse>
  );
};

export default observer(EditTaskForm);
