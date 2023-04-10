import { FC } from "react";
import { Button, Collapse } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";
import { Task } from "../../../store/task/Task";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

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
    await task.boardSection.updateTask(task.id, values);
    methods.reset();
    onClose();
  };

  return (
    <Collapse in={open}>
      <Form
        formMethods={methods}
        onSubmit={methods.handleSubmit(editTaskHandler)}
      >
        <FormField label="Task title" name="title" />
        <FormField label="Task description" name="description" />
        <LoadingButton isLoading={task.isLoading}>Save</LoadingButton>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Form>
    </Collapse>
  );
};

export default observer(EditTaskForm);
