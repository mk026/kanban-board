import { FC } from "react";
import { observer } from "mobx-react-lite";

import { useSigninForm } from "../../../hooks/useSigninForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const SigninForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSigninForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField type="email" label="Email" name="email" />
      <FormField type="password" label="Password" name="password" />
      <LoadingButton isLoading={isLoading}>Signin</LoadingButton>
    </Form>
  );
};

export default observer(SigninForm);
