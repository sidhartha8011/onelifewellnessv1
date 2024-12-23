import React from 'react';
import PropTypes from 'prop-types';

const OLWHero = ({ heading, subHeading, fontSize }) => {
  return (
    <div className="olw-hero-section">
      <div className="olw-hero-pulse-image"></div>
      <div className="olw-hero-head-container">
        <h1
          className="olw-hero-heading"
        >
          <span className="olw-hero-font-weight">{heading}</span> {subHeading}
        </h1>
      </div>
      <div className="olw-hero-pulse-image-2"></div>
    </div>
  );
};

// Prop validation
OLWHero.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  fontSize: PropTypes.string, // Font size should be optional
};

// Default Props
OLWHero.defaultProps = {
  fontSize: "80px", // Default font size
};

export default OLWHero;
