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
        <p>
          {review.length < 110 ? review.length : review.slice(0, 110)}
          <small>
            <b>... Read More</b>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Review;
