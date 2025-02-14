import React from 'react';

import TopLeft from '../assets/images/bg-vectors/vec-6.svg';
import TopCenter from '../assets/images/bg-vectors/vec-5.svg';
import TopRight from '../assets/images/bg-vectors/vec-4.svg';

const OlwBackgroundTop = () => {
  return (
    <div className="cs-bg-top-container">
      <img src={TopLeft} alt="Top Left" className="top-left" />
      <img src={TopCenter} alt="Top Center" className="top-center" />
      <img src={TopRight} alt="Top Right" className="top-right" />
    </div>
  );
};

export default OlwBackgroundTop;
