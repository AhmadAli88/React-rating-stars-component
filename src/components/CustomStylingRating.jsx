import React from 'react';
import ReactStars from 'react-rating-stars-component';

const CustomStylingRating = () => (
  <div>
    <h2>Custom Styling Rating</h2>
    <ReactStars count={5} size={50} activeColor="#3498db" />
  </div>
);

export default CustomStylingRating;
