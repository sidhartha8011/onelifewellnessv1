import React from 'react';
import { Link } from 'react-router-dom';
import OlwBackground from '../components/OlwBackground';
import OlwBackgroundBottom from '../components/OlwBackgroundBottom';

const Coming = () => {
  return (
    <div>
        <OlwBackground/>
        <div className="not-found-container">
    
      <h1 className="coming-soon-title">Coming Soon</h1>
      <Link to="/" className="not-found-link">Go Back to Home</Link>
    </div>

    <OlwBackgroundBottom />
    </div>
    
  );
};

export default Coming;
