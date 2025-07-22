import React from 'react';
import '../../styles/footer.css';
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
           <NavLink to="/">
          <li>{t("title")}</li>
        </NavLink>{" "}
            <NavLink to="/about" smooth={true} offset={-260} duration={500}>
          <li>{t("about")}</li>
        </NavLink>{" "}
           <NavLink to="/Login" smooth={true} offset={-260} duration={500}>
          <li>{t("download app")}<span><i class="ri-mobile-download-line"></i></span></li>
        </NavLink>{" "}
             <NavLink to="contact" smooth={true} offset={-250} duration={500}>
          <li  >{t("Contact")}</li>
          
        </NavLink>{" "}
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>123 Main Street, City</li>
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-twitter-x-fill"></i></a>
            <a href="#"><i class="ri-linkedin-fill"></i></a>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;