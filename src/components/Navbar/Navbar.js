import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import image from '../../Assets/image/image.png';

const Navbar = () => {
  return (
    <nav>
      <div className="image-container">
        <img src={image} alt="" />
        <h2>Book Shelf</h2>
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/home"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/reviews"
        >
          REVIEWS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/dashboard"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/blogs"
        >
          BLOGS
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/about"
        >
          ABOUT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
