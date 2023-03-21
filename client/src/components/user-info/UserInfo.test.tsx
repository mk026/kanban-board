import { render, screen } from "@testing-library/react";

import UserInfo from ".";
import { User } from "../../store/user/User";
import { UserStore } from "../../store/user/UserStore";

it("Should render UserInfo", () => {
  const fakeUser: User = {
    id: 1,
    name: "user name",
    email: "user@example.com",
    bio: "user bio",
    store: {} as UserStore,
  };

  render(<UserInfo user={fakeUser} />);

  const element = screen.getByText(fakeUser.name);

  expect(element).toBeInTheDocument();
});
