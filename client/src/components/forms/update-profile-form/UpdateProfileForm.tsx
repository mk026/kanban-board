import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";
import { useStore } from "../../../hooks/useStore";

const UpdateProfileForm: FC = () => {
  const { userStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  const updateProfileHandler = (values: UpdateProfileFormValues) => {
    userStore.updateUser(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(updateProfileHandler)}>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
      />
      <TextField
        type="email"
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default UpdateProfileForm;
