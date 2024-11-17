import React from 'react';
import ReactStars from 'react-rating-stars-component';

const BasicRating = () => {
  const handleRating = (newRating) => {
    console.log(`Rated: ${newRating}`);
  };

  return (
    <div>
      <h2>Basic Star Rating</h2>
      <ReactStars count={5} onChange={handleRating} size={24} activeColor="#ffd700" />
    </div>
  );
};

export default BasicRating;
