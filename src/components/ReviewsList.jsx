import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ReviewsItem from './ReviewsItem';

const ReviewsList = ({ reviews }) => {
  return (
    <Row xs={1} className="g-4">
      {reviews.map(({ id, ...reviewsDetails }) => (
        <Col key={id}>
          <ReviewsItem {...reviewsDetails} />
        </Col>
      ))}
    </Row>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewsList;
