import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../../../validation/updatePasswordValidation";

const UpdatePasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  const updatePasswordHandler = (values: UpdatePasswordFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updatePasswordHandler)}>
      <label>
        Old password
        <input type="password" {...register("oldPassword")} />
      </label>
      {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
      <label>
        New Password
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <label>
        Confirm new Password
        <input type="password" {...register("confirmPassword")} />
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UpdatePasswordForm;
