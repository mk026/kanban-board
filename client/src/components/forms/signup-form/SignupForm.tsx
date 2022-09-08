import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(signupHandler)}>
      <label>
        Name
        <input type="text" {...register("name", { required: true })} />
      </label>
      {errors.name && <p>Name is a required field</p>}
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
      <label>
        Confirm password
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
      </label>
      {errors.confirmPassword && <p>Please confirm your password</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignupForm;
