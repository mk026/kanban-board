import { FC } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { Task } from "../../../store/task/Task";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

interface EditTaskFormProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const EditTaskForm: FC<EditTaskFormProps> = ({ task, open, onClose }) => {
  const methods = useForm<TaskFormValues>({
    mode: "onBlur",
    defaultValues: { title: task.title, description: task.description },
    resolver: yupResolver(taskValidationSchema),
  });

  const editTaskHandler = async (values: TaskFormValues) => {
    await task.boardSection.updateTask({ ...task, ...values });
    methods.reset();
    onClose();
  };

  return (
    <Collapse in={open}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(editTaskHandler)}>
          <FormField label="Task title" name="title" />
          <FormField label="Task description" name="description" />
          <LoadingButton isLoading={task.isLoading}>Save</LoadingButton>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </Box>
      </FormProvider>
    </Collapse>
  );
};

export default observer(EditTaskForm);
