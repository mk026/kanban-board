import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const AddBoardForm: FC = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const addBoardHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addBoardHandler)}>
      <label>
        Board title
        <input type="text" {...register("title", { required: true })} />
      </label>
      <label>
        Board description (optional)
        <input type="text" {...register("description", { required: false })} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddBoardForm;
