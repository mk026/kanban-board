import { render, screen } from "@testing-library/react";

import PageTitle from ".";

it("Should render PageTitle", () => {
  const title = "Page Title";

  render(<PageTitle>{title}</PageTitle>);

  const element = screen.getByText(title);

  expect(element).toBeInTheDocument();
});
