import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import OlwBackgroundTop from "../components/OlwBackgroundTop";
import OlwBackgroundBottom from "../components/OlwBackgroundBottom";


const Introduction = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
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
          <p className="olw-intro-quote zoomIn">
            “You have only one life—live it well, and let us guide you toward a
            path of peace, prosperity, and productivity.”
          </p>
          <button className="olw-intro-button fadeInUp" onClick={handleNavigate}>
            <span className="olw-intro-button-icon">
              <CgArrowLongRight className="olw-intro-icon" />
            </span>
            Welcome
          </button>
        </div>
      </div>
      <OlwBackgroundBottom />
    </>
  );
};

export default Introduction;
