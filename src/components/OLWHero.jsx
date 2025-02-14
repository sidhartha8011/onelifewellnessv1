import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LinearGradient } from "react-text-gradients";

// Define the animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

const OLWHero = ({ heading, subHeading, fontSize }) => {
  return (
    <div className="olw-hero-section">
      <div className="olw-hero-pulse-image"></div>

      {/* Animation Wrapper for Heading and Subheading */}
      <div className="olw-hero-head-container">
        {/* Animated Heading */}
        <motion.h1
          className="olw-hero-heading"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <LinearGradient
            gradient={["to left", "#AADB71 ,#053090"]}
            fallbackColor="black"
          >
            <span className="font-weight-bold">{heading}</span>
          </LinearGradient>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.h1
          className="olw-hero-heading"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ fontSize }}
        >
          {subHeading}
        </motion.h1>
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
