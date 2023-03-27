import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../validation/signupValidation";
import { useStore } from "./useStore";

export const useSignupForm = () => {
  const { authStore } = useStore();
  const formMethods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    authStore.signup(values);
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signupHandler),
    isLoading: authStore.isLoading,
  };
};
