import React from "react";

import LeftMiddle from "../assets/images/bg-vectors/bg2-vec1.svg";
import TopCenter from "../assets/images/bg-vectors/bg2-vec6.svg";
import TopRight from "../assets/images/bg-vectors/bg2-vec2.svg";
import TopLeft from "../assets/images/bg-vectors/bg2-vec3.svg";
import BottomRight from "../assets/images/bg-vectors/bg2-vec4.svg";
import BottomCenter from "../assets/images/bg-vectors/bg2-vec5.svg";

const OlwBackgroundTwo = () => {
  return (
    <div className="cs-bg-container-two">
      <img src={TopLeft} alt="Top Left" className="bg-two-top-left" />
      <img src={TopCenter} alt="Top Center" className="bg-two-top-center" />
      <img src={TopRight} alt="Top Right" className="bg-two-top-right" />
      <img
        src={BottomRight}
        alt="Bottom Right"
        className="bg-two-bottom-right"
      />
      <img
        src={BottomCenter}
        alt="Bottom Center"
        className="bg-two-bottom-center"
      />
      <img src={LeftMiddle} alt="Bottom Left" className="bg-two-left-middle" />
    </div>
  );
};

export default OlwBackgroundTwo;
