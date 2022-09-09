import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    console.log(values);
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
    </form>
  );
};

export default SignupForm;
