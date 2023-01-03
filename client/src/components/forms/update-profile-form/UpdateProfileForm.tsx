import { FC } from "react";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

const UpdateProfileForm: FC = () => {
  const { userStore } = useStore();
  const methods = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  const updateProfileHandler = (values: UpdateProfileFormValues) => {
    userStore.updateUser(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updateProfileHandler)}
      >
        <FormField label="Name" name="name" />
        <FormField type="email" label="Email" name="email" />
        <LoadingButton isLoading={userStore.isLoading}>Save</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdateProfileForm;
