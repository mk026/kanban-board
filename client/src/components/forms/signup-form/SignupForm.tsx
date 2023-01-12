import { FC } from "react";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

const SignupForm: FC = () => {
  const { authStore } = useStore();
  const methods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    authStore.signup(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signupHandler)}>
        <FormField label="Name" name="name" />
        <FormField label="About yourself" name="bio" multiline />
        <FormField type="email" label="Email" name="email" />
        <FormField type="password" label="Password" name="password" />
        <FormField
          type="password"
          label="Confirm password"
          name="confirmPassword"
        />
        <LoadingButton isLoading={authStore.isLoading}>Signup</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default observer(SignupForm);
