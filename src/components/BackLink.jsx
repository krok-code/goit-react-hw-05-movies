import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../images/left-arrow.svg';

const BackLink = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="py-3" onClick={goBack} style={{ cursor: 'pointer' }}>
      {' '}
      <ArrowLeft />
      Go back{' '}
    </div>
  );
};

export default BackLink;
