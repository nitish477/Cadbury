import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our website! We are dedicated to providing you with the best experience possible. Our team is committed to excellence and innovation, working tirelessly to bring you top-quality products and services.
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
        <div className="about-team">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://st2.depositphotos.com/1032577/5312/i/450/depositphotos_53128333-stock-photo-about-me-sign.jpg" alt="Team Member 1" className="team-photo" />
              <h3 className="team-name">Raja ji😁</h3>
              <p className="team-role">CEO</p>
              <p className="team-bio">raja is the visionary behind our company, with a passion for innovation and a commitment to excellence.</p>
            </div>
            <div className="team-member">
              <img src="path/to/team-member2.jpg" alt="Team Member 2" className="team-photo" />
              <h3 className="team-name">John Smith</h3>
              <p className="team-role">CTO</p>
              <p className="team-bio">John drives our technological advancements, ensuring that we stay at the cutting edge of industry trends.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
        <div className="about-history">
          <h2 className="history-title">Our History</h2>
          <p className="history-text">
            Founded in 2010, we have grown from a small startup to a leading player in the industry. Our journey has been marked by innovation, growth, and a commitment to quality. We take pride in our accomplishments and look forward to the future with excitement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
