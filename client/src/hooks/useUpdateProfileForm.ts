import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useStore } from "./useStore";
import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../validation/updateProfileValidation";

export const useUpdateProfileForm = () => {
  const { userStore } = useStore();
  const formMethods = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  const updateProfileHandler = (values: UpdateProfileFormValues) => {
    userStore.updateUser(values);
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updateProfileHandler),
    isLoading: userStore.isLoading,
  };
};
