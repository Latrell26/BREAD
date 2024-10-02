//This is the navbar
import React from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/bread-black.png";

const Navbar = () => {
  // useLocation hook provides access to the current location object
  const location = useLocation();

  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <img className="logo" src={logo} alt="Bread Logo" width="120px" />
      <ul>
      {/* Ternary operator to check current path */}
        {location.pathname === '/donation' ? (
          <li className="nav-item_last"><Link to='/'>Home</Link></li> // Only show Home link if on the donation page
        ) : (
          <>
            {/* Shows all link if on the home page */}
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li> 
            <li className="nav-item_2"><a href="#about" className="nav-link">About</a></li> 
            <li className="nav-item_3"><a href="#news" className="nav-link">News</a></li> 
            <li className="nav-item_last"><Link to='/donation'>Donation</Link></li> 
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;