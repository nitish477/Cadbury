import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
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
