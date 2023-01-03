import { FC } from "react";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

const SigninForm: FC = () => {
  const { authStore } = useStore();
  const methods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    authStore.signin(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signinHandler)}>
        <FormField type="email" label="Email" name="email" />
        <FormField type="password" label="Password" name="password" />
        <LoadingButton isLoading={authStore.isLoading}>Signin</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default observer(SigninForm);
