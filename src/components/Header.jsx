import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/One-life-wellness-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-menu-container ${isVisible ? "visible" : "hidden"}`}>
      {/* Logo & Hamburger Container */}
      <div className="header-logo-container">
        <NavLink to="/" className="nav-header-logo">
          <img src={logo} alt="One Life Wellness" className="header-logo" />
        </NavLink>

        {/* Hamburger Menu (Mobile) */}
        <div className="header-hamburger-container" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
        </div>
      </div>

      {/* Navigation Menu */}
      <ul ref={menuRef} className={`header-menu-items-container ${isMobileMenuOpen ? "open" : ""}`}>
        {["welcome", "who-we-are", "how-we-work", "why-it-matters", "lets-talk"].map((path) => (
          <li key={path}>
            <NavLink
              to={`/${path}`}
              className={({ isActive }) => (isActive ? "header-menu-link active" : "header-menu-link")}
              onClick={handleMenuItemClick}
            >
              {path.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
