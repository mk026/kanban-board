import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useSignupForm } from "../../../hooks/useSignupForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SignupForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSignupForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Name" name="name" />
      <FormField label="About yourself" name="bio" multiline />
      <FormField type="email" label="Email" name="email" />
      <FormField type="password" label="Password" name="password" />
      <FormField
        type="password"
        label="Confirm password"
        name="confirmPassword"
      />
      <LoadingButton isLoading={isLoading}>Signup</LoadingButton>
    </Form>
  );
};

export default observer(SignupForm);
