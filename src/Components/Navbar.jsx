//This is the navbar
import React from 'react';
import { Link } from 'react-router-dom';
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

        <li className="nav-item"><Link to='/donation'>Donation</Link></li> 

      </ul>
    </nav>
  );
};

export default Navbar;
