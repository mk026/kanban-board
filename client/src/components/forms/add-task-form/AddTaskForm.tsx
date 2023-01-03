import { FC } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { BoardSection } from "../../../store/board-section/BoardSection";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../form-field/FormField";
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
  const methods = useForm<TaskFormValues>({
    mode: "onBlur",
    resolver: yupResolver(taskValidationSchema),
  });

  const addTaskHandler = async (values: TaskFormValues) => {
    await boardSection.addTask(values);
    methods.reset();
    onClose();
  };

  return (
    <Collapse in={open}>
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(addTaskHandler)}>
          <FormField label="Task title" name="title" />
          <FormField label="Task description" name="description" />
          <LoadingButton isLoading={isLoading}>Save</LoadingButton>
          <Button type="button" onClick={onClose}>
            Close
          </Button>
        </Box>
      </FormProvider>
    </Collapse>
  );
};

export default AddTaskForm;
