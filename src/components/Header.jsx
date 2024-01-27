import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cinema</Navbar.Brand>
          <Nav className="me-auto" variant="underline">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="movies" className="nav-link">
              Movies
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default Header;
