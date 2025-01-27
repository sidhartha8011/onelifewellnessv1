import React from 'react';

const Cards = () => {
  return (
    <div className="olw-stack-cares-container">
      <ul className="olw-stack-cares-cards">
        <li className="olw-stack-cares-card" id="card1">
          <div className="olw-stack-cares-card-body">
            <h2>Card 1</h2>
          </div>
        </li>
        <li className="olw-stack-cares-card" id="card2">
          <div className="olw-stack-cares-card-body">
            <h2>Card 2</h2>
          </div>
        </li>
        <li className="olw-stack-cares-card" id="card3">
          <div className="olw-stack-cares-card-body">
            <h2>Card 3</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
