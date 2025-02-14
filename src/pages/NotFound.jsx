import React from 'react';
import { Link } from 'react-router-dom';
import OlwBackground from '../components/OlwBackground';
import OlwBackgroundBottom from '../components/OlwBackgroundBottom';

const NotFound = () => {
  return (
    <div>
        <OlwBackground/>
        <div className="not-found-container">
    
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-link">Go Back to Home</Link>
    </div>

    <OlwBackgroundBottom />
    </div>
    
  );
};

export default NotFound;
