/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React from 'react';
import PerformantImage from './PerformantImage';

const imageSizes = [282, 400, 1000];

const Card = ({
  title,
  image,
}) => (
  <div
    className="card"
    style={{
      margin: '1rem auto',
      width: '10rem',
    }}
  >
    <PerformantImage
      alt="Card cap"
      className="card-img-top"
      source={image}
      sizes={imageSizes}
    />
    <div className="card-body">
      <h5 className="card-title text-center">{title}</h5>
    </div>
  </div>
);

export default Card;
