import { FC } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useStore } from "../../../hooks/useStore";

const SignupForm: FC = () => {
  const { authStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    authStore.signup(values);
  };

  return (
    <form onSubmit={handleSubmit(signupHandler)}>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        type="email"
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        type="password"
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        type="password"
        label="Confirm password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        type="submit"
        disabled={authStore.isLoading}
        endIcon={
          authStore.isLoading && (
            <CircularProgress size="1rem" color="inherit" />
          )
        }
      >
        Submit
      </Button>
    </form>
  );
};

export default observer(SignupForm);
