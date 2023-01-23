import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from ".";
import StoreProvider from "../../context/StoreContext";

it("Should render Header", () => {
  render(
    <MemoryRouter>
      <StoreProvider>
        <Header />
      </StoreProvider>
    </MemoryRouter>
  );

  const header = screen.getByTestId("header");

  expect(header).toBeInTheDocument();
});
