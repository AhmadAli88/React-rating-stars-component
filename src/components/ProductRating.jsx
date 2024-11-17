import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const ProductRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Rate Our Product</h2>
      <ReactStars count={5} value={rating} onChange={handleRating} size={30} activeColor="#ff4500" />
      <p>Thank you for giving a {rating}-star rating!</p>
    </div>
  );
};

export default ProductRating;
