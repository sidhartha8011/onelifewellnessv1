import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import OlwBackgroundTop from "../components/OlwBackgroundTop";
import OlwBackgroundBottom from "../components/OlwBackgroundBottom";
import OLWIntroimage from '../assets/images/welcome/olw-intro-image.png';

const Introduction = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/welcome");
  };

  return (
    <>
      <OlwBackgroundTop />
      <div className="olw-intro-page">
        <div className="olw-intro-content-wrapper fadeIn">
          <h1 className="olw-intro-main-heading fadeInDown">
            One Life Wellness, A Manual for Life
          </h1>
          <h2 className="olw-intro-sub-heading fadeInUp">
            Empowering You to Live with Purpose
          </h2>
          <p className="olw-intro-quote ">
            “You have only one life—live it well, and let us guide you toward a
            path of peace, prosperity, and productivity.”
          </p>
          <button className="olw-intro-button fadeInUp" onClick={handleNavigate}>
            <span className="olw-intro-button-icon">
              <CgArrowLongRight className="olw-intro-icon zoomIn" />
            </span>
            Welcome
          </button>
        </div>
        <div>
          <img src={OLWIntroimage} alt="" className="olw-intro-image zoomIn" />
        </div>
      </div>
      <OlwBackgroundBottom />
    </>
  );
};

export default Introduction;
