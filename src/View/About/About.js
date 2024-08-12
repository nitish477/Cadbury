import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our website! We are dedicated to providing you with the best experience possible.
        </p>
        <div className="about-svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="300"
            height="auto"
          >
            <circle cx="250" cy="250" r="200" fill="#8b5cf6" />
            <circle cx="250" cy="250" r="150" fill="#a855f7" />
            <circle cx="250" cy="250" r="100" fill="#6d28d9" />
            <circle cx="250" cy="250" r="50" fill="#4c1d95" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
