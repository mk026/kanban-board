import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useStore } from "../../../hooks/useStore";

const SigninForm: FC = () => {
  const { authStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    authStore.signin(values);
  };

  return (
    <form onSubmit={handleSubmit(signinHandler)}>
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
      <Button type="submit">Submit</Button>
      {authStore.isLoading && <span>Loading...</span>}
    </form>
  );
};

export default observer(SigninForm);
