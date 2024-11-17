import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ReadOnlyRating = () => (
  <div>
    <h2>Read-Only Rating</h2>
    <ReactStars count={5} value={4} edit={false} size={24} activeColor="#2ecc71" />
  </div>
);

export default ReadOnlyRating;
