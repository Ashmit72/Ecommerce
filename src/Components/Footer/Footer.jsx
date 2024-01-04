import './Footer.css';

import React from 'react';

import instagram_icon from '../../Assets/instagram_icon.png';
import footer_logo from '../../Assets/logo_big.png';
import pintrest_icon from '../../Assets/pintester_icon.png';
import whatsapp_icon from '../../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="pintrest_icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 -All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
