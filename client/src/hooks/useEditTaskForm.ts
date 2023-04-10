import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Task } from "../store/task/Task";
import {
  TaskFormValues,
  taskValidationSchema,
} from "../validation/taskValidation";

export const useEditTaskForm = (task: Task, onClose: () => void) => {
  const formMethods = useForm<TaskFormValues>({
    mode: "onBlur",
    defaultValues: { title: task.title, description: task.description },
    resolver: yupResolver(taskValidationSchema),
  });

  const editTaskHandler = async (values: TaskFormValues) => {
    await task.boardSection.updateTask(task.id, values);
    formMethods.reset();
    onClose();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(editTaskHandler),
    isLoading: task.isLoading,
  };
};
