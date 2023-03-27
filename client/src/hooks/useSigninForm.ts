import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../validation/signinValidation";
import { useStore } from "./useStore";

export const useSigninForm = () => {
  const { authStore } = useStore();
  const formMethods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    authStore.signin(values);
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signinHandler),
    isLoading: authStore.isLoading,
  };
};
