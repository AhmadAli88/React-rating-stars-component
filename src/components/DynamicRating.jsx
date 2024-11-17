import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const DynamicRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Dynamic Star Rating</h2>
      <ReactStars count={5} value={rating} onChange={handleRating} size={24} activeColor="#9b59b6" />
      <p>Current Rating: {rating}</p>
    </div>
  );
};

export default DynamicRating;
