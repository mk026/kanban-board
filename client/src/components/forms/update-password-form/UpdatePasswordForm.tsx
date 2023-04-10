import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useUpdatePasswordForm } from "../../../hooks/useUpdatePasswordForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form/Form";

const UpdatePasswordForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useUpdatePasswordForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField type="password" label="Old password" name="oldPassword" />
      <FormField type="password" label="New Password" name="password" />
      <FormField
        type="password"
        label="Confirm new password"
        name="confirmPassword"
      />
      <LoadingButton isLoading={isLoading}>Save</LoadingButton>
    </Form>
  );
};

export default observer(UpdatePasswordForm);
