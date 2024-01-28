import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <header className="mb-5">
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
      </header>
      <main>
        <Container className="mb-5">
          <Outlet />
        </Container>
      </main>
      <footer>
        <Container>
          <Row className="p-4">
            <Col>
              <p className="text-center fst-italic">
                created by{' '}
                <NavLink to="https://github.com/em0nti">emonti</NavLink>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default SharedLayout;
