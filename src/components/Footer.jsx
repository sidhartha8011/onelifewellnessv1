import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/One-life-wellness-logo.png";

const Footer = () => {
  return (
    <>
      <div className="olw-footer-container">
        <div className="olw-footer-menu-container">
          <div className="olw-fmc-left">
            <div className="olw-footer-image-container">
              <img
                src={logo}
                alt="one-life-wellness"
                className="olw-footer-logo"
              />
            </div>
            <p>
              One Life Wellness is your go-to resource for proactive healthcare
              and holistic living, guiding you to nurture a peaceful mind,
              productive habits, and a prosperous outlook.
            </p>
            <form className="footer-subscription-container">
              <input
                type="email"
                placeholder="Enter your email address"
                className="footer-email-input"
              />
              <button className="blue-button">Send</button>
            </form>
          </div>
          <div className="olw-footer-menu-link">
            <div>
              <h3>Quick Links</h3>
              <ul className="footer-menu-links">
                <li>
                  <Link className="footer-menu-items" to="/">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link className="footer-menu-items" to="/who-we-are">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link className="footer-menu-items" to="/how-we-work">
                    How we work
                  </Link>
                </li>
                <li>
                  <Link className="footer-menu-items" to="/why-it-matters">
                    Why It Matters
                  </Link>
                </li>
                <li>
                  <Link className="footer-menu-items" to="/explore">
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link className="footer-menu-items" to="/lets-talk">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="olw-social-footer-container">
          <div className="footer-copyright">
            <p>© 2025 One Life Wellness. All Rights Reserved.</p>
            <p>
              All information is for educational purposes only and should not
              replace professional medical advice.
            </p>
          </div>
          <div className="olw-footer-policy-links">
            <div>
              <Link to="/pages/Privacy-Policy" className="olw-pages-list-link">
                <span className="polocy-link">Privacy Policy</span>
              </Link>
            </div>
            <div>|</div>
            <div>
              <Link to="/pages/Privacy-Policy" className="olw-pages-list-link">
                <span className="polocy-link">Terms & Conditions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
{
  /* <div>
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
</div> */
}
