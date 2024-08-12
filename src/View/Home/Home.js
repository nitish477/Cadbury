import React from 'react';
import './Home.css'; // Ensure to create this CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className='h1'>Welcome to Cadbury</h1>
        <p className='p'>Your favorite chocolate destination!</p>
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 200"
            width="200"
            height="auto"
          >
            <path
              d="M100 20 L150 70 L100 120 L50 70 Z"
              fill="#6d28d9"
            />
            <path
              d="M200 20 L250 70 L200 120 L150 70 Z"
              fill="#a855f7"
            />
            <path
              d="M300 20 L350 70 L300 120 L250 70 Z"
              fill="#8b5cf6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
