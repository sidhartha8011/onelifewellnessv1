import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/images/One-life-wellness-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`header-menu-container ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Logo Section */}
      <div className='header-logo-container'>
        <NavLink to='/' className='nav-header-logo'>
          <img src={logo} alt='One Life Wellness' className='header-logo' />
        </NavLink>

        {/* Desktop and Mobile Menu */}
        <ul
  className={`header-menu-items-container ${
    isMobileMenuOpen ? 'mobile-open' : ''
  }`}
>
  <li>
    <NavLink
      to='/welcome'
      className='header-menu-link'
      activeClassName='active'
      onClick={handleMenuItemClick}
    >
      Welcome
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/who-we-are'
      className='header-menu-link'
      activeClassName='active'
      onClick={handleMenuItemClick}
    >
      Who We Are
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/how-we-work'
      className='header-menu-link'
      activeClassName='active'
      onClick={handleMenuItemClick}
    >
      How We Work
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/why-it-matters'
      className='header-menu-link'
      activeClassName='active'
      onClick={handleMenuItemClick}
    >
      Why It Matters
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/lets-talk'
      className='header-menu-link'
      activeClassName='active'
      onClick={handleMenuItemClick}
    >
      Let’s Talk
    </NavLink>
  </li>
</ul>

      </div>

      {/* Hamburger or Close Icon (Mobile) */}
      <div className='header-hamburger-container' onClick={toggleMobileMenu}>
        <span className='header-hamburger-menu'>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </span>
      </div>
    </div>
  );
};

export default Header;
