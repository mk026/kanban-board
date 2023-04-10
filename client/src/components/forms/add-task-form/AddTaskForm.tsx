import { FC } from "react";
import { Button, Collapse } from "@mui/material";

import { BoardSection } from "../../../store/board-section/BoardSection";
import { useAddTaskForm } from "../../../hooks/useAddTaskForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface AddTaskFormProps {
  boardSection: BoardSection;
  open: boolean;
  onClose: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ boardSection, open, onClose }) => {
  const { formMethods, onSubmit, isLoading } = useAddTaskForm(
    boardSection,
    onClose
  );

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

export default AddTaskForm;
