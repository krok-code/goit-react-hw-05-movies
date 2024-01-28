import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Nav, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const MovieCard = ({ imgUrl, title }) => {
  return (
    <Card className="mb-3">
      <Row className="g-0">
        <Col md={4}>
          <Image
            src={imgUrl}
            className="rounded-start"
            alt={`${title} film poster`}
            fluid
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title className="fs-2">{title}</Card.Title>
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
  );
};

MovieCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default MovieCard;
