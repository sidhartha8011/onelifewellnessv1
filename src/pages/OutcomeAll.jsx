import React from 'react';
import { useNavigate } from 'react-router-dom';
import OLWHero from '../components/OLWHero';

const OutcomeAll = () => {
  const navigate = useNavigate();

  // Array of outcomes
  const outcomes = [
    { id: 1, title: 'PEACE', image: 'http://placehold.it/300x300?text=PEACE' },
    { id: 2, title: 'PRODUCTIVITY', image: 'http://placehold.it/300x300?text=PRODUCTIVITY' },
    { id: 3, title: 'GROWTH', image: 'http://placehold.it/300x300?text=GROWTH' },
    { id: 4, title: 'PROSPERITY', image: 'http://placehold.it/300x300?text=PROSPERITY' },
  ];

  // Handle outcome click to navigate to the detailed view
  const handleOutcomeClick = (outcome) => {
    const urlFriendlyTitle = outcome.title.toLowerCase().replace(/\s+/g, '-'); // Converts the title to a URL-friendly format
    navigate(`/pages/outcome-of-one-life-wellness/${urlFriendlyTitle}`, {
      state: { outcome }, // Pass the entire outcome data as state
    });
  };

  return (
    <div className="flex-col align-center bottom-100">
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading="Outcome - One Life Wellness"
          fontSize="70px"
        />
      </div>
      <div className="outcome-overall-container">
        {outcomes.map((outcome) => (
          <div
            key={outcome.id}
            className="outcome-container-box"
            onClick={() => handleOutcomeClick(outcome)} // Trigger navigation on click
            style={{ cursor: 'pointer' }} // Optional: Add a pointer cursor for better UX
          >
            <img
              src={outcome.image}
              alt={outcome.title}
              className="outcome-post-thumbnail"
            />
            <div className="outcome-heading-container">
              <h1 className="outcome-heading-text">{outcome.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutcomeAll;
