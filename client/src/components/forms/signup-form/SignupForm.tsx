import { FC } from "react";

const SignupForm: FC = () => {
  return (
    <form>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <label>
        Confirm password
        <input type="password" />
      </label>
    </form>
  );
};

export default SignupForm;
