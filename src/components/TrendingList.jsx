import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap-dom';

const TrendingList = ({ movies }) => {
  return (
    <ListGroup as="ol" numbered>
      {movies.map(({ id, title }) => {
        return (
          <ListGroup.Item key={id} as="li">
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default TrendingList;
