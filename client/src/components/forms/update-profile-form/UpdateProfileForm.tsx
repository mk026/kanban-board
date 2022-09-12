import { FC } from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";

const UpdateProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  const updateProfileHandler = (values: UpdateProfileFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updateProfileHandler)}>
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UpdateProfileForm;
