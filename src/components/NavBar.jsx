import React from 'react';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/artwheel" className="navbar-logo">Art Wheel</a>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="services" className="nav-link">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
