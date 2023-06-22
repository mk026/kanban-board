import { render, screen } from "@testing-library/react";

import AppInfo from ".";

it("Should render AppInfo", () => {
  render(<AppInfo />);

  const element = screen.getByText("Welcome to React Kanban Board App");

  expect(element).toBeInTheDocument();
});
