import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const AddBoardSectionForm: FC = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const addBoardSectionHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addBoardSectionHandler)}>
      <label>
        Section title
        <input type="text" {...register("title")} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddBoardSectionForm;
