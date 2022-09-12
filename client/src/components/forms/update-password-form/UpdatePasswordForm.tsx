import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const UpdatePasswordForm: FC = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const updatePasswordHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updatePasswordHandler)}>
      <label>
        Old password
        <input type="password" {...register("name")} />
      </label>
      <label>
        New Password
        <input type="password" {...register("password")} />
      </label>
      <label>
        Confirm new Password
        <input type="password" {...register("confirmPassword")} />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UpdatePasswordForm;
