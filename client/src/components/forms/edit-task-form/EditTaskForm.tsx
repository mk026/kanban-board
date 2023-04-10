import { FC } from "react";
import { Button, Collapse } from "@mui/material";
import { observer } from "mobx-react-lite";

import { Task } from "../../../store/task/Task";
import { useEditTaskForm } from "../../../hooks/useEditTaskForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface EditTaskFormProps {
  task: Task;
  open: boolean;
  onClose: () => void;
}

const EditTaskForm: FC<EditTaskFormProps> = ({ task, open, onClose }) => {
  const { formMethods, onSubmit, isLoading } = useEditTaskForm(task, onClose);

  return (
    <Collapse in={open}>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <FormField label="Task title" name="title" />
        <FormField label="Task description" name="description" />
        <LoadingButton isLoading={isLoading}>Save</LoadingButton>
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </Form>
    </Collapse>
  );
};

export default observer(EditTaskForm);
