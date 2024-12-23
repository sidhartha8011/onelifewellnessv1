import React from "react";
import Header from "../components/Header";

import { CgArrowLongRight } from "react-icons/cg";

import adults from "../assets/images/cs-images/adults.png";
import children from "../assets/images/cs-images/children.png";
import grandparents from "../assets/images/cs-images/grandparents.png";
import dog from "../assets/images/cs-images/dog.png";
import OlwBackgroundTop from "../components/OlwBackgroundTop";
import OlwBackgroundBottom from "../components/OlwBackgroundBottom";

const Home = () => {
  return (
    <>
      <OlwBackgroundTop />
      <Header />
      <div className="olw-home-page">
        <div className="olw-header0container">
          <h1 className="olw-home-header zoomIn">
            One <span className="heading-bold">Life Wellness,</span> A{" "}
            <span className="heading-bold">manual</span> for{" "}
            <span className="heading-bold">life</span>
          </h1>
        </div>

        <div className="olw-home-content-box flex align-center">
          <div className="olw-home-left">
            <h4 className="olw-hl-head">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <h2>LOREM IPSUMDOLOR</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim
              feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem
              laoreet odio ipsum vestibulum tortor magna purus pharetra.
              Pulvinar vitae fermentum risus id risus nisi quis nunc.
            </p>
            <button className="home-button">
              Explore more
              <span className="home-button-icon">
                <CgArrowLongRight className="" />
              </span>{" "}
            </button>
          </div>
          <div className="olw-home-right">
            <img src={adults} alt="" className="home-adults" />
            <img src={children} alt="" className="home-children" />
            <img src={grandparents} alt="" className="home-grandparents pointer" />
            <img src={dog} alt="" className="home-dog" />
          </div>
        </div>
      </div>
      
      <OlwBackgroundBottom />
    </>
  );
};

export default Home;
