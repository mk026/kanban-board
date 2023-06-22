import { render, screen } from "@testing-library/react";

import NotFoundMessage from ".";

it("Should render NotFoundMessage", () => {
  render(<NotFoundMessage />);

  const element = screen.getByText("Page Not Found");

  expect(element).toBeInTheDocument();
});
