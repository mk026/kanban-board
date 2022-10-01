import { FC } from "react";
import { Button } from "@mui/material";
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
      <Button type="submit">Submit</Button>
      {authStore.isLoading && <span>Loading...</span>}
    </form>
  );
};

export default observer(SigninForm);
