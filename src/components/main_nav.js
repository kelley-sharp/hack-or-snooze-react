import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useRouteMatch } from "react-router-dom";

export const MainNav = () => {
  return (
    <Navbar expand fixed="top" variant="dark">
      <Nav className="mr-auto">
        <CustomNavLink to="/">News Feed</CustomNavLink>
        <CustomNavLink to="/my-stories">My stories</CustomNavLink>
        <CustomNavLink to="/favorites">Favorites</CustomNavLink>
        <CustomNavLink to="/login">Login</CustomNavLink>
      </Nav>
    </Navbar>
  );
};

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
