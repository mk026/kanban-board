import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../validation/updatePasswordValidation";

export const useUpdatePasswordForm = () => {
  const { userStore } = useStore();
  const formMethods = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  const updatePasswordHandler = (values: UpdatePasswordFormValues) => {
    userStore.updatePassword(values);
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updatePasswordHandler),
    isLoading: userStore.isLoading,
  };
};
