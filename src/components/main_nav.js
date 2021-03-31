import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const MainNav = () => {
  return (
    <Navbar expand fixed="top" variant="dark" bg="dark">
      <Nav className="mr-auto">
        <Nav.Link>News Feed</Nav.Link>
        <Nav.Link>My stories</Nav.Link>
        <Nav.Link>Favorites</Nav.Link>
        <Nav.Link>Login</Nav.Link>
      </Nav>
    </Navbar>
  );
};
