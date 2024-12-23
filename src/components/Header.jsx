import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi"; // Import the close icon FiX
import logo from '../assets/images/One-life-wellness-logo.svg';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='header-menu-container'>
      {/* Logo Section */}
      <div className='header-logo-container'>
        <img src={logo} alt='One Life Wellness' className='header-logo' />

        {/* Desktop and Mobile Menu */}
        <ul className={`header-menu-items-container ${isMobileMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to='/home'
              className='header-menu-link'
              activeClassName='active' // Automatically adds this class to the active route
              onClick={handleMenuItemClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages/About'
              className='header-menu-link'
              activeClassName='active'
              onClick={handleMenuItemClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages/How-we-Are-going-to-Achieve-it'
              className='header-menu-link'
              activeClassName='active'
              onClick={handleMenuItemClick}
            >
              How We Are
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages/Outcome-of-One-Life-Wellness'
              className='header-menu-link'
              activeClassName='active'
              onClick={handleMenuItemClick}
            >
              Outcomes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages/what-we-do'
              className='header-menu-link'
              activeClassName='active'
              onClick={handleMenuItemClick}
            >
              What We Do
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pages/Contact'
              className='header-menu-link'
              activeClassName='active'
              onClick={handleMenuItemClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hamburger or Close Icon (Mobile) */}
      <div className='header-hamburger-container' onClick={toggleMobileMenu}>
        <span className='header-hamburger-menu'>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />} {/* Show FiX when menu is open, otherwise show FiMenu */}
        </span>
      </div>
    </div>
  );
};

export default Header;
