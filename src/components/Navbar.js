import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar__title">Solution-Tech</h1>
    <div className="navbar__links">
      <Link to="/" className="navbar__link">Home</Link>
      <Link to="/courses" className="navbar__link">All Courses</Link>
      <Link to="/career" className="navbar__link">Career Opportunities</Link>
      <Link to="/about" className="navbar__link">About</Link>
      <Link to="/contact" className="navbar__link">Contact</Link>
      
    </div>
  </nav>
);

export default Navbar;
