import React from 'react'
import { useState } from 'react';

    const StarRating = () => {
      const [rating, setRating] = useState(0);
    
      const handleRatingChange = (newRating) => {
        setRating(newRating);
      };
    
      return (
        <div>
          <span
            onClick={() => handleRatingChange(1)}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            {rating >= 1 ? '⭐️' : '☆'}
          </span>
          <span
            onClick={() => handleRatingChange(2)}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            {rating >= 2 ? '⭐️' : '☆'}
          </span>
          <span
            onClick={() => handleRatingChange(3)}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            {rating >= 3 ? '⭐️' : '☆'}
          </span>
          <span
            onClick={() => handleRatingChange(4)}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            {rating >= 4 ? '⭐️' : '☆'}
          </span>
          <span
            onClick={() => handleRatingChange(5)}
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            {rating >= 5 ? '⭐️' : '☆'}
          </span>
        </div>
      );
    };

export default StarRating();
