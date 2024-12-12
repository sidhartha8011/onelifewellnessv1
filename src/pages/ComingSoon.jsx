import React, {useState} from 'react';
import { CgArrowLongRight } from "react-icons/cg";
import Marquee from "react-fast-marquee";

import TopLeft from '../assets/images/bg-vectors/vec-6.svg';
import TopCenter from '../assets/images/bg-vectors/vec-5.svg';
import TopRight from '../assets/images/bg-vectors/vec-4.svg';
import BottomLeft from '../assets/images/bg-vectors/vec-1.svg';
import BottomCenter from '../assets/images/bg-vectors/vec-3.svg';
import BottomRight from '../assets/images/bg-vectors/vec-2.svg';
import adults from '../assets/images/cs-images/adults.png'
import children from '../assets/images/cs-images/children.png'
import grandparents from '../assets/images/cs-images/grandparents.png'
import dog from '../assets/images/cs-images/dog.png'
import OLWLogo from '../assets/images/OLW-logo.png';
import SubscriptionPopup from '../components/SubscriptionPopup';

const ComingSoon = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () =>
        {
            console.log('clicked')
            setIsPopupOpen(true);

        } 
    const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="coming-soon">
        <div className="cs-bg-container">
            <img src={TopLeft} alt="Top Left" className="top-left" />
            <img src={TopCenter} alt="Top Center" className="top-center" />
            <img src={TopRight} alt="Top Right" className="top-right" />
            <img src={BottomRight} alt="Bottom Right" className="bottom-right" />
            <img src={BottomCenter} alt="Bottom Center" className="bottom-center" />
            <img src={BottomLeft} alt="Bottom Left" className="bottom-left" />
        </div>
      <div className='cs-top'>
            <div className="scrolling-container">
            <img 
                src={OLWLogo} 
                alt="Scrolling Image" 
                className="scrolling-image"
            />
            </div>
            <div className='cs-coming-soon-container'>
            <h1 className='cs-olw-text'>
                One Life Wellness
            </h1>
            <div className='cs-coming-soon-text'>
            <Marquee className='maquree-container' >
                <div className='cs-scrolling-text'>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                <p>Coming Soon</p>
                </div>

                    
                </Marquee>

            </div>

          
               
            </div>
            <div className='cs-coming-soon-text-mobile'>
              <Marquee className='maquree-container' >
                  <div className='cs-scrolling-text'>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  <p>Coming Soon</p>
                  </div>

                      
                  </Marquee>

            </div>
            <button className='cs-button' onClick={handleOpenPopup}>
                <span className='cs-button-icon' >
                <CgArrowLongRight className='cs-icon' />
                </span>
                Click to Notify Me 
            </button>
            <SubscriptionPopup isOpen={isPopupOpen} onClose={handleClosePopup} />

      </div>
      <div className='cs-bottom'>

        <img src={adults} alt="adults" className='adults' />
        <img src={children} alt="children" className='children' />
        <img src={grandparents} alt="grandparents" className='grandparents' />
        <img src={dog} alt="dog" className='dog' />
      </div>
    </div>
  );
};

export default ComingSoon;
