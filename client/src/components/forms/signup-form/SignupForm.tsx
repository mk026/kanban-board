import { FC } from "react";
import { Button } from "@mui/material";
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
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      {errors.name && <p>{errors.name.message}</p>}
      <label>
        Email
        <input type="text" {...register("email")} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <label>
        Confirm password
        <input type="password" {...register("confirmPassword")} />
      </label>
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <Button type="submit">Submit</Button>
      {authStore.isLoading && <span>Loading...</span>}
    </form>
  );
};

export default observer(SignupForm);
