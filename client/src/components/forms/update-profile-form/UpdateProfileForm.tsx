import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form/Form";

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
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updateProfileHandler)}
    >
      <FormField label="Name" name="name" />
      <FormField label="About yourself" name="bio" multiline />
      <FormField type="email" label="Email" name="email" />
      <LoadingButton isLoading={userStore.isLoading}>Save</LoadingButton>
    </Form>
  );
};

export default UpdateProfileForm;
