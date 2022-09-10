import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  TaskFormValues,
  taskValidationSchema,
} from "../../../validation/taskValidation";

const AddTaskForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    mode: "onBlur",
    resolver: yupResolver(taskValidationSchema),
  });

  const addTaskHandler = (values: TaskFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addTaskHandler)}>
      <label>
        Task title
        <input type="text" {...register("title")} />
      </label>
      {errors.title && <p>{errors.title.message}</p>}
      <label>
        Task description
        <input type="text" {...register("description")} />
      </label>
      {errors.description && <p>{errors.description.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddTaskForm;
