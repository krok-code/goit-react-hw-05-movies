import React from 'react';
import PropTypes from 'prop-rypes';
import { Card } from 'react-bootstrap';
import { dateFormatOptions } from 'utils/constant';

const ReviewsItem = ({ author, created_at, content }) => {
  const formatedDate = new Date(created_at).toLocaleDateString(
    'en-US',
    dateFormatOptions
  );

  return (
    <Card>
      <Card.Header>
        Written by <span className="text-success fw-bold">{` ${author}`}</span>{' '}
        on {` ${formatedDate}`}
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
