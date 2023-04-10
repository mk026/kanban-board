import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../../../validation/updatePasswordValidation";
import { useStore } from "../../../hooks/useStore";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form/Form";

const UpdatePasswordForm: FC = () => {
  const { userStore } = useStore();
  const methods = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  const updatePasswordHandler = (values: UpdatePasswordFormValues) => {
    userStore.updatePassword(values);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updatePasswordHandler)}
    >
      <FormField type="password" label="Old password" name="oldPassword" />
      <FormField type="password" label="New Password" name="password" />
      <FormField
        type="password"
        label="Confirm new password"
        name="confirmPassword"
      />
      <LoadingButton isLoading={userStore.isLoading}>Save</LoadingButton>
    </Form>
  );
};

export default observer(UpdatePasswordForm);
