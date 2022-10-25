import { FC } from "react";
import { Button, TextField } from "@mui/material";
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
      <TextField
        type="password"
        label="Old password"
        {...register("oldPassword")}
        error={!!errors.oldPassword}
        helperText={errors.oldPassword?.message}
      />
      <TextField
        type="password"
        label="New Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        type="password"
        label="Confirm new Password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UpdatePasswordForm;
