import React from 'react';
import './Review.css';

const Review = (props) => {
  const { imageURL, name, rating, review } = props.review;
  //   console.log(name);
  return (
    <div className="review-container">
      <div className="img-container">
        <img src={imageURL} alt="" />
      </div>
      <div className="text-center">
        <h3>{name}</h3>
        <p>
          <small>Rating: ({rating})</small>
        </p>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
