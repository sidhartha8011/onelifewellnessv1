import React from 'react'

import TopLeft from '../assets/images/bg-vectors/vec-6.svg';
import TopCenter from '../assets/images/bg-vectors/vec-5.svg';
import TopRight from '../assets/images/bg-vectors/vec-4.svg';
import BottomLeft from '../assets/images/bg-vectors/vec-1.svg';
import BottomCenter from '../assets/images/bg-vectors/vec-3.svg';
import BottomRight from '../assets/images/bg-vectors/vec-2.svg';


const OlwBackground = () => {
  return (
    
        <div className="cs-bg-container">
                    <img src={TopLeft} alt="Top Left" className="top-left" />
                    <img src={TopCenter} alt="Top Center" className="top-center" />
                    <img src={TopRight} alt="Top Right" className="top-right" />
                    <img src={BottomRight} alt="Bottom Right" className="bottom-right" />
                    <img src={BottomCenter} alt="Bottom Center" className="bottom-center" />
                    <img src={BottomLeft} alt="Bottom Left" className="bottom-left" />
        </div>
    
  )
}

export default OlwBackground