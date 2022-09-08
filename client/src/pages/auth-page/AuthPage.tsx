import { Button } from "@mui/material";
import { FC, useState } from "react";
import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";

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
