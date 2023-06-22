import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AppTitle from ".";

it("Should render AppTitle", () => {
  render(
    <MemoryRouter>
      <AppTitle />
    </MemoryRouter>
  );

  const element = screen.getByText("React Kanban Board");

  expect(element).toBeInTheDocument();
});
