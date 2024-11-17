import React from 'react';
import ReactStars from 'react-rating-stars-component';

const DefaultValueRating = () => (
  <div>
    <h2>Default Star Rating</h2>
    <ReactStars count={5} value={3.5} isHalf size={24} activeColor="#e74c3c" />
  </div>
);

export default DefaultValueRating;
