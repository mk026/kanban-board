import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { BoardSection } from "../store/board-section/BoardSection";
import {
  TaskFormValues,
  taskValidationSchema,
} from "../validation/taskValidation";

export const useAddTaskForm = (
  boardSection: BoardSection,
  onClose: () => void
) => {
  const formMethods = useForm<TaskFormValues>({
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
    formMethods.reset();
    onClose();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addTaskHandler),
    isLoading: boardSection.isLoading,
  };
};
