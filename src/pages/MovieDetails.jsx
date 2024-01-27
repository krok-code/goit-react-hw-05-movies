import React from 'react';
import { Card, Col, Image, Nav, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <Link to="/">
        <div className="py-3">
          {''}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentlColor"
            className="bi bi-arrow-left"
            viewBox=" 0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          {''}
          Go back{''}
        </div>
      </Link>
      <Card className="mb-3">
        <Row className="g-0">
          <Col md={4}>
            <Image src="..." className="rounded-start" alt="..." fluid />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="fs-2">Movie title</Card.Title>
              <Card.Text>User score: 71%</Card.Text>
              <Card.Text className="fs-5 fw-semibold">Overview</Card.Text>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="fs-5 fw-semibold">Genres</Card.Text>
              <Card.Text>Adventure Animation</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0">
          <Col className="p-3">
            <Card.Text className="fs-5 fw-semibold">
              Additional Information
            </Card.Text>
            <Nav>
              <Nav.Item>
                <NavLink
                  to="cast"
                  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-2"
                >
                  Cast
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="reviews"
                  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-2"
                >
                  Reviews
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="g-0">
          <Col className="p-3">
            {' '}
            <Outlet />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default MovieDetails;
