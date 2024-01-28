import React from 'react';
import PropTypes from 'prop-rypes';
import { Card } from 'react-bootstrap';

const ReviewsItem = ({ author, created_at, content }) => {
  return (
    <Card>
      <Card.Header>
        Written by <span className="text-success fw-bold">{` ${author}`}</span>{' '}
        on {` ${created_at}`}
      </Card.Header>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string,
};

export default ReviewsItem;
