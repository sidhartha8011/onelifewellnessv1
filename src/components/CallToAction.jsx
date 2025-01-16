import React from 'react';

const CallToAction = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="olw-call-to-action">
      <div className="olw-footer-cta-container">
        <div className="olw-footer-cta-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <a href={buttonLink}>
            <button className="blue-button">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
