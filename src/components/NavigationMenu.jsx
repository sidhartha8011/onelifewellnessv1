import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (

    <div className='olw-pages-list-container'>
    <nav className="olw-pages-list-nav">
      {/* Main Heading */}
      <h2 className="olw-pages-list-heading">One Life Wellness Pages</h2>
      
      <ul className="olw-pages-list">
        {/* Main Pages */}
        <li className="olw-pages-list-item">
          <Link to="/" className="olw-pages-list-link">Home</Link>
        </li>

        {/* Nested Pages under /pages */}
        <li className="olw-pages-list-item">
          <Link to="/pages/About" className="olw-pages-list-link">About</Link>
        </li>
        <li className="olw-pages-list-item">
          <Link to="/pages/Contact" className="olw-pages-list-link">Contact</Link>
        </li>
        <li className="olw-pages-list-item">
          <Link to="/pages/How-we-Are-going-to-Achieve-it" className="olw-pages-list-link">
            How We Are Going To Achieve It
          </Link>
        </li>
        <li className="olw-pages-list-item">
          <Link to="/pages/Outcome-of-One-Life-Wellness" className="olw-pages-list-link">
            Outcome of One Life Wellness
          </Link>
        </li>
        <li className="olw-pages-list-item">
          <Link to="/pages/Privacy-Policy" className="olw-pages-list-link">Privacy Policy</Link>
        </li>
        <li className="olw-pages-list-item">
          <Link to="/pages/what-we-do" className="olw-pages-list-link">What We Do</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default NavigationMenu;
