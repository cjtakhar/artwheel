import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import Image from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/artwheel" className="navbar-logo">
            <img src={Image} alt="logo" className="logo" /> {/* Move the logo inside the Link */}
            Art Wheel
          </Link>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link> {/* Use Link */}
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link> {/* Use Link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;