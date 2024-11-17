import React from 'react';
import ReactStars from 'react-rating-stars-component';

const HalfStarRating = () => (
  <div>
    <h2>Half-Star Rating</h2>
    <ReactStars count={5} isHalf size={24} activeColor="#00aaff" />
  </div>
);

export default HalfStarRating;
