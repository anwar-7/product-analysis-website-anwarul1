import React from 'react';
import './NotFound.css';
import notFound from '../../Assets/image/notFound.webp';

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
