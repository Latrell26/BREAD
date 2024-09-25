//This is the navbar
import React from 'react';
import logo from '../assets/bread-black.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <img className="logo" src={logo} alt="Bread Logo" width="120px" />
      <ul>
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="#news" className="nav-link">News</a></li>
        <li className="nav-item"><a href="Donation.html" className="nav-link">Donation</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
