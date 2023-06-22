import { render, screen } from "@testing-library/react";

import AlertItem from ".";
import StoreProvider from "../../context/StoreContext";
import { IAlert } from "../../store/ui/UIStore";

it("Should render AlertItem", () => {
  const fakeAlert: IAlert = {
    id: 0,
    title: "alert title",
    message: "alert message",
    severity: "info",
    timer: setTimeout(() => {}, 0),
  };

  render(
    <StoreProvider>
      <AlertItem alert={fakeAlert} />
    </StoreProvider>
  );

  const element = screen.getByText(fakeAlert.title);

  expect(element).toBeInTheDocument();
});
