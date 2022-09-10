import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const AddTaskForm: FC = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const addTaskHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addTaskHandler)}>
      <label>
        Task title
        <input type="text" {...register("title")} />
      </label>
      <label>
        Task description (optional)
        <input type="text" {...register("description")} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddTaskForm;
