import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import OLWHero from '../components/OLWHero';

const OutcomeSingle = () => {
  const { title } = useParams(); // Fetch the URL-friendly title parameter
  const location = useLocation(); // Fetch the state passed from the navigation

  // If the state is available, use it; otherwise, find the outcome from the title in the URL
  const outcome = location.state ? location.state.outcome : null;

  // If the state is not passed, we try to find the outcome using the title
  const outcomes = [
    { id: 1, title: 'Peace', image: 'http://placehold.it/300x300?text=Peace' },
    { id: 2, title: 'Health', image: 'http://placehold.it/300x300?text=Health' },
    { id: 3, title: 'Growth', image: 'http://placehold.it/300x300?text=Growth' },
    { id: 4, title: 'Happiness', image: 'http://placehold.it/300x300?text=Happiness' },
  ];

  // If the outcome wasn't passed via state, find it from the outcomes array
  const selectedOutcome = outcome || outcomes.find(
    (outcome) => outcome.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  if (!selectedOutcome) {
    return <div>Outcome not found. Please navigate from the OutcomeAll page.</div>;
  }

  return (
    <div className="outcome-single-container flex-col align-center bottom-100">
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading={`Outcome - ${selectedOutcome.title}`}
          fontSize="70px"
        />
      </div>

      <div className="outcome-overall-container">
        <div key={selectedOutcome.id} className="outcome-container-box">
          <img
            src={selectedOutcome.image}
            alt={selectedOutcome.title}
            className="outcome-post-thumbnail"
          />
          <div className="outcome-heading-container">
            <h1 className="outcome-heading-text">{selectedOutcome.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSingle;
