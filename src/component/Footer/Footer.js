import React from 'react';
import './Footer.css';  // Ensure to create this CSS file

const Footer = () => {
  const Style ={
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
    textAlign: "center" 
  }
  return (
    <footer style={Style} >
      <p>© 2024 My Website</p>
    </footer>
  );
};

export default Footer;
