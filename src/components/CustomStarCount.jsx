import React from 'react';
import ReactStars from 'react-rating-stars-component';

const CustomStarCount = () => (
  <div>
    <h2>Custom Star Count</h2>
    <ReactStars count={10} size={30} activeColor="#f39c12" />
  </div>
);

export default CustomStarCount;
