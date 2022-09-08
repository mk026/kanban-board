import { FC } from "react";

const SigninForm: FC = () => {
  return (
    <form>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
    </form>
  );
};

export default SigninForm;
