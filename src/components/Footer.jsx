import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/images/One-life-wellness-logo.svg'

const Footer = () => {
  return (
    <>
      <div className="olw-footer-container">
        <div className="olw-footer-cta-container">
          <div className="olw-footer-cta-content">
            <h1>Lorem Ipsum Dolor Sit Amet Consectetur.</h1>
            <p>
              Lorem Ipsum dolor sit amet consectetur Feugiat fermentum a enim
              feugiat. Pharetra pretium turpis luctus scelerisque sed. Lorem
              Ipsum dolor sit amet consectetur Feugiat fermentum a enim feugiat.
              Pharetra pretium turpis luctus scelerisque sed.{" "}
            </p>
          </div>
          <div>
            <button className="blue-button">Lorem ipsum</button>
          </div>
        </div>
        <div className="olw-footer-menu-container">
          <div className="olw-fmc-left">
            <h1>Lorem Ipsum Dolor</h1>
            <p>Lorem Ipsum dolor sit amet consectetur Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed.  Lorem Ipsum dolor sit amet consectetur Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. </p>
            <form className="footer-subscription-container">
              <input type="email" placeholder="Enter your email address" className="footer-email-input" />
              <button className="blue-button">Send</button>
            </form>
          </div>
          <div className="olw-footer-menu-link">
            <div>
              <h4>Lorem Ipsum</h4>
              <ul className="footer-menu-links">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <ul className="footer-menu-links">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div>
              <h4>Lorem Ipsum</h4>
              <ul className="footer-menu-links">
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="olw-social-footer-container">
          <div>
            <ul className="olw-social-icons">
              <li>
                <a
                  href="https://facebook.com/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <RiInstagramFill className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaSquareXTwitter className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/YourPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="olw-footer-image-container">
              <img src={logo} alt="one-life-wellness" className="olw-footer-logo"/>
          </div>
          <div>
            <Link to="/pages/Privacy-Policy" className="olw-pages-list-link"><span className="polocy-link">Privacy Policy</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
