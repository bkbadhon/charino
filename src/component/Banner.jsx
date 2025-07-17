import React from 'react';
import img from '../assets/images/banner.webp';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <p className="banner-title">Welcome to Our Website</p>
          <h1 className="banner-heading">Creating change One Life at a time</h1>
          <p className="banner-text">
            Discover the best services and solutions tailored to your needs. We help you achieve your goals with confidence.
          </p>
          <Link to="/about">
            <button className="banner-button text-black font-semibold">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
