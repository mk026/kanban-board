import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Paths } from "../../routes";

const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={Paths.HOME_PATH}>Home</NavLink>
        </li>
        <li>
          <NavLink to={Paths.BOARDS_PATH}>Boards</NavLink>
        </li>
        <li>
          <NavLink to={Paths.PROFILE_PATH}>Profile</NavLink>
        </li>
        <li>
          <NavLink to={Paths.AUTH_PATH}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
