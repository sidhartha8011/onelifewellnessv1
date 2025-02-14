import React from 'react';

import BottomLeft from '../assets/images/bg-vectors/vec-1.svg';
import BottomCenter from '../assets/images/bg-vectors/vec-3.svg';
import BottomRight from '../assets/images/bg-vectors/vec-2.svg';

const OlwBackgroundBottom = () => {
  return (
    <div className="cs-bg-bottom-container">
      <img src={BottomRight} alt="Bottom Right" className="bottom-right" />
      <img src={BottomCenter} alt="Bottom Center" className="bottom-center" />
      <img src={BottomLeft} alt="Bottom Left" className="bottom-left" />
    </div>
  );
};

export default OlwBackgroundBottom;
