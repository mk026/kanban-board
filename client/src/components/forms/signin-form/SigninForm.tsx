import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { SigninFormValues } from "../../../validation/signinValidation";

const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>();

  const signinHandler = (values: SigninFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(signinHandler)}>
      <label>
        Email
        <input type="text" {...register("email", { required: true })} />
      </label>
      {errors.email && <p>Email is a required field</p>}
      <label>
        Password
        <input type="password" {...register("password", { required: true })} />
      </label>
      {errors.password && <p>Password is a required field</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SigninForm;
