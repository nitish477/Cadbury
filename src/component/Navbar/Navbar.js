import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <button onClick={() => handleNavigation('/')}>Home</button>
        </li>
        <li className="nav-item">
          <button onClick={() => handleNavigation('/about')}>About</button>
        </li>
        <li className="nav-item">
          <button onClick={() => handleNavigation('/contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
