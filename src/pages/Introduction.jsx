import React, { useState, useEffect } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import OlwBackgroundTop from "../components/OlwBackgroundTop";
import OlwBackgroundBottom from "../components/OlwBackgroundBottom";
import OLWIntroimage from "../assets/images/welcome/olw-intro-image.png";
import { LinearGradient } from "react-text-gradients";

const Introduction = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isAnimationOver, setIsAnimationOver] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 3000); // Start animation after 3 seconds

    setTimeout(() => {
      setShowImage(true);
      setShowButton(true);
      setIsAnimationOver(true);
    }, 4000); // Show image with zoom after 4 seconds
  }, []);

  return (
    <>
      <OlwBackgroundTop />
      <div className="olw-intro-page">
        {/* Text Section */}
        <div
          className={`olw-intro-content-wrapper ${
            isAnimating ? "animate-content" : ""
          } ${
            isAnimationOver ? "normal-content" : ""
          }`}
        >
          <h1 className="olw-intro-main-heading">
            <LinearGradient
              gradient={["to left", "#AADB71 ,#053090"]}
              fallbackColor="black"
            >
              <span className="font-weight-bold">
                One Life Wellness, A Manual for Life
              </span>
            </LinearGradient>{" "}
          </h1>
          <h2 className="olw-intro-sub-heading">
            Empowering You to Live with Purpose
          </h2>
          <p className="olw-intro-quote">
            “You have only one life—live it well, and let us guide you toward a
            path of peace, prosperity, and productivity.”
          </p>
          <div
            className={`olw-intro-button-wrapper ${
              showButton ? "show-button" : ""
            } `}
          >
            <button
              className="olw-intro-button essence-section-button"
              onClick={() => navigate("/welcome")}
            >
              <CgArrowLongRight className="olw-intro-icon" /> Welcome
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`olw-intro-image-wrapper ${showImage ? "show-image" : ""}`}
        >
          <img
            src={OLWIntroimage}
            alt="Introduction to One Life Wellness"
            className="olw-intro-image"
          />
        </div>
      </div>
      <OlwBackgroundBottom />
    </>
  );
};

export default Introduction;
