import { FC, useState } from "react";
import { Button } from "@mui/material";

import SigninForm from "../../components/forms/signin-form";
import SignupForm from "../../components/forms/signup-form";

const AuthPage: FC = () => {
  const [isSignin, setIsSignin] = useState(false);

  const toggleAuthMode = () => setIsSignin((prev) => !prev);

  const activeForm = isSignin ? <SigninForm /> : <SignupForm />;

  return (
    <>
      {activeForm}
      <Button onClick={toggleAuthMode}>
        Switch to {isSignin ? "signup" : "signin"}
      </Button>
    </>
  );
};

export default AuthPage;
