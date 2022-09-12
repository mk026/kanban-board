import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const UpdateProfileForm: FC = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const updateProfileHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updateProfileHandler)}>
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      <label>
        Email
        <input type="text" {...register("email")} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UpdateProfileForm;
