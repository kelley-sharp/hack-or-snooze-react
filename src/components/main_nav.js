import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user_context";

const CustomNavLink = ({ to, children }) => {
  const isActiveRoute = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Nav.Link active={isActiveRoute} as={Link} to={to}>
      {children}
    </Nav.Link>
  );
};

export const MainNav = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Navbar expand fixed="top" variant="dark">
      <Nav className="w-100">
        <CustomNavLink to="/">News Feed</CustomNavLink>
        {isLoggedIn && (
          <>
            <CustomNavLink to="/my-stories">My stories</CustomNavLink>
            <CustomNavLink to="/favorites">Favorites</CustomNavLink>
          </>
        )}
        <div className="ml-auto">
          {isLoggedIn ? (
            <Nav.Link onClick={() => false}>Logout</Nav.Link>
          ) : (
            <CustomNavLink to="/login">Login</CustomNavLink>
          )}
        </div>
      </Nav>
    </Navbar>
  );
};
