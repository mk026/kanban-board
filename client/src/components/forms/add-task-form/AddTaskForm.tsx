import { FC } from "react";
import { Button, Collapse } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { BoardSection } from "../../../store/board-section/BoardSection";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface AddTaskFormProps {
  boardSection: BoardSection;
  open: boolean;
  onClose: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ boardSection, open, onClose }) => {
  const methods = useForm<TaskFormValues>({
    mode: "onBlur",
    resolver: yupResolver(taskValidationSchema),
  });

  const addTaskHandler = async (values: TaskFormValues) => {
    await boardSection.createTask({
      ...values,
      boardId: boardSection.boardId,
      sectionId: boardSection.id,
      order: boardSection.newTaskOrder,
    });
    methods.reset();
    onClose();
  };

  return (
    <Collapse in={open}>
      <Form
        formMethods={methods}
        onSubmit={methods.handleSubmit(addTaskHandler)}
      >
        <FormField label="Task title" name="title" />
        <FormField label="Task description" name="description" />
        <LoadingButton isLoading={boardSection.isLoading}>Save</LoadingButton>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Form>
    </Collapse>
  );
};

export default AddTaskForm;
