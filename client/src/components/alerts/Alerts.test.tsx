import { render, screen } from "@testing-library/react";

import Alerts from ".";
import StoreProvider from "../../context/StoreContext";

it("Should render Alerts", () => {
  render(
    <StoreProvider>
      <Alerts />
    </StoreProvider>
  );

  const alertsList = screen.getByTestId("alerts-list");

  expect(alertsList).toBeInTheDocument();
});
