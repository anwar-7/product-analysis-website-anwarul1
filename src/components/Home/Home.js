import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import book from '../../Assets/image/book.png';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1 className="hading-one">Your next Book</h1>
          <h1 className="hading-two">Your bast Book</h1>
          <p>
            Those who do not get good marks in exams, those who are not
            considered as good students, are indirectly addressed as donkeys,
            bulls or habuls. These hubbubs are far behind in the field of study,
            job market or love.
          </p>
          <p>
            That's why programming has been introduced like the hubbubs, with
            the chatter of the tea shop. So that the Hablus can enjoy the fun of
            programming in Hablus style.
          </p>
          <div className="btn-live-demo">
            <Button className="text-center" variant="primary">
              Live Demo
            </Button>{' '}
          </div>
        </div>
        <div className="product-container">
          <img src={book} alt="Habluder jonno programming By Jhankar Mahbub" />
        </div>
      </div>
      {/* Customer reviews section */}
      <div>
        <h1 className="text-center my-5">
          Customer Reviews ({reviews.slice(0, 3).length})
        </h1>
        <div className="home-review-container">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
      <div className="see-all-btn">
        <button onClick={() => navigate('/reviews')}>SEE ALL REVIEWS</button>
      </div>
    </>
  );
};

export default Home;
