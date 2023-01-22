import { render, screen } from "@testing-library/react";

import AuthLinks from ".";

it("Should render AuthLinks", () => {
  const signupButtonText = "Create Account";
  const signinButtonText = "Signin";

  render(<AuthLinks />);

  const signupButton = screen.getByText(signupButtonText);
  const signinButton = screen.getByText(signinButtonText);

  expect(signupButton).toBeInTheDocument();
  expect(signinButton).toBeInTheDocument();
});
