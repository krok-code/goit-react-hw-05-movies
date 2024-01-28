import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Nav, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { generateImageUrl } from 'api/tmdb';

const MovieCard = ({ poster_path, title, vote_avarage, overview, genres }) => {
  const movieImgUrl = generateImageUrl(poster_path, 'w500');
  const userScore = Math.round(vote_avarage * 10);

  return (
    <Card className="mb-3">
      <Row className="g-0">
        <Col md={3}>
          <Image
            src={movieImgUrl}
            className="rounded-start"
            alt={`${title} film poster`}
            fluid
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title className="fs-2">{title}</Card.Title>
            <Card.Text>User score: {userScore + '%'}</Card.Text>
            <Card.Text className="fs-5 fw-semibold">Overview</Card.Text>
            <Card.Text>{overview}</Card.Text>
            <Card.Text className="fs-5 fw-semibold">Genres</Card.Text>
            <Card.Text>{genres.map(genre => genre.name).join(', ')}</Card.Text>
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
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_avarage: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default MovieCard;
