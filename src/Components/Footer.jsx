//This is the footer
import React from 'react';
import logoWhite from '../assets/bread-white.png';
import fbIcon from '../assets/icons8-facebook-50.png';
import igIcon from '../assets/icons8-ig-50.png';
import ytIcon from '../assets/icons8-youtube-50.png';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img className="logo2" src={logoWhite} alt="Bread Logo White" width="120px" />
        <p className="footer-company-name">Copyright 2024 Bread, Inc. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>STI College San Pablo</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>09674270830</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>bread@gmail.com</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>Contact us on</span>
        </p>

        <div className="footer-icons">
          <img src={fbIcon} alt="Facebook" width="35px" />
          <img src={igIcon} alt="Instagram" width="35px" />
          <img src={ytIcon} alt="YouTube" width="35px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
