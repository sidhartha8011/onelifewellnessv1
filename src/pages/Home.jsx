import React from "react";

import { CgArrowLongRight } from "react-icons/cg";

import adults from "../assets/images/cs-images/adults.png";
import children from "../assets/images/cs-images/children.png";
import grandparents from "../assets/images/cs-images/grandparents.png";
import dog from "../assets/images/cs-images/dog.png";
import OlwBackgroundTop from "../components/OlwBackgroundTop";
import OlwBackgroundBottom from "../components/OlwBackgroundBottom";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { GiMeditation } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GrGrow } from "react-icons/gr";
import purpose from '../assets/images/purpose.jpg';
import doctors from '../assets/images/doctors.jpg';
import mannual from '../assets/images/mannual.jpg';

const Home = () => {
  return (
    <>
      <OlwBackgroundTop />
      <div className="olw-home-page">
        {/* <div className="olw-header-container">
          <h1 className="olw-home-header zoomIn">
            One <span className="heading-bold">Life Wellness:</span> A{" "}
            <span className="heading-bold">Manual</span> for{" "}
            <span className="heading-bold">Life</span>
          </h1>
        </div> */}

        <div className="olw-home-content-box ">
          <div className="olw-home-left">
            <h2>Empower Your Health, Empower Your Life</h2>
            <h3>A One-Stop Guide to Living Well—Body, Mind, and Spirit</h3>
            <p>
              Welcome to One Life Wellness, your comprehensive platform for
              health, lifestyle, and psychological insights. Discover actionable
              strategies and expert-driven resources to help you and your family
              thrive at every stage of life.
            </p>
            <Link to="/welcome">
              <button className="home-button">
                Explore Our Insights
                <span className="home-button-icon">
                  <CgArrowLongRight />
                </span>
              </button>
            </Link>
          </div>
          <div className="olw-home-right">
            <img src={adults} alt="Adults" className="home-adults" />
            <img src={children} alt="Children" className="home-children" />
            <img
              src={grandparents}
              alt="Grandparents"
              className="home-grandparents pointer"
            />
            <img src={dog} alt="Dog" className="home-dog" />
          </div>
        </div>

        <div class="olw-home-intro-sections">
          {/* <!-- Section 1: Image Left, Content Right --> */}
          <div class="olw-home-intro-section olw-home-layout-image-left">
            <div class="olw-home-image-container">
              <img
                src={mannual}
                alt="One Life Wellness: A Manual for Life"
                class="olw-home-image"
              />
            </div>
            <div class="olw-home-content-container">
              <h2 class="olw-home-title">
                One Life Wellness: A Manual for Life
              </h2>
              <p class="olw-home-description">
                Life is precious, and you deserve to live it to the fullest. At
                One Life Wellness, we believe that every individual should have
                access to clear, actionable guidance that safeguards both body
                and mind. Our mission is to make proactive healthcare and
                holistic well-being accessible to everyone—regardless of
                background or starting point.
              </p>
              <p class="olw-home-description">
                By blending modern research with practical advice, we show you
                how to transform everyday choices into powerful, lasting habits.
                Whether you’re seeking mental clarity, aiming for greater
                productivity, or aspiring to a more abundant lifestyle, we offer
                evidence-based strategies that help you thrive. It’s about
                nurturing a peaceful mind, cultivating a productive lifestyle,
                and ultimately unlocking a prosperous outlook that enriches
                every facet of your life.
              </p>
            </div>
          </div>
          {/* 
  <!-- Section 2: Content Left, Image Right --> */}
          <div class="olw-home-intro-section olw-home-layout-image-right">
            <div class="olw-home-image-container">
              <img
                src={purpose}
                alt="The Soul of Our Purpose, Vision & Essence"
                class="olw-home-image"
              />
            </div>
            <div class="olw-home-content-container">
              <h2 class="olw-home-title">
                The Soul of Our Purpose, Vision & Essence
              </h2>
              <p class="olw-home-description">
                We believe the best way to prevent illness is to understand how
                your body and mind work together. Our content translates complex
                medical knowledge into simple, actionable steps, helping you
                take control of your well-being before problems arise.
              </p>
              <p class="olw-home-description">
                We dream of a world where proactive self-care is second nature,
                where families and communities flourish under a culture of
                prevention rather than cure. Our vision is a place where mental
                clarity, physical vitality, and emotional balance shape everyday
                life.
              </p>
            </div>
          </div>

          {/* <!-- Section 3: Image Left, Content Right --> */}
          <div class="olw-home-intro-section olw-home-layout-image-left">
            <div class="olw-home-image-container">
              <img
                src={doctors}
                alt="Meet the Hearts Behind Our Mission: Who We Are & Why We Care"
                class="olw-home-image"
              />
            </div>
            <div class="olw-home-content-container">
              <h2 class="olw-home-title">
                Meet the Hearts Behind Our Mission: Who We Are & Why We Care
              </h2>
              <p class="olw-home-description">
                We are a diverse collective of doctors, wellness experts, and
                tech enthusiasts, united by a passion for preventive healthcare
                and sustainable living. Having witnessed firsthand how early
                intervention can transform lives, we’ve dedicated ourselves to
                sharing knowledge in a way that’s both easy to understand and
                simple to implement.
              </p>
              <blockquote class="olw-home-quote">
                “We do what we do because life is a gift—one that should be
                nurtured, protected, and celebrated.”
              </blockquote>
            </div>
          </div>

          {/* <!-- Section 4: Content Left, Image Right --> */}
          <div class="olw-home-intro-section olw-home-layout-image-right bottom-100">
            <div class="olw-home-box-container">
              <h2 class="olw-home-title">Our Triple Path to Thriving</h2>
              <ul class="olw-home-list">
                <li>
                <GiMeditation className="home-icons" />
                  <h2>Peace</h2> Build emotional resilience and foster
                  a calm, focused mind to handle life’s demands. By nourishing
                  inner harmony, you create a solid foundation for overall
                  well-being.
                </li>
                <li>
                <AiOutlineLaptop className="home-icons" />
                  <h2>Productivity</h2> Leverage proven routines,
                  effective planning, and preventive care to maintain high
                  energy and accomplish more with less stress. When health and
                  structure align, you flourish in every task.
                </li>
                <li>
                <GrGrow className="home-icons" />
                  <h2>Prosperity</h2> Develop an abundant mindset,
                  aligning physical health and mental clarity to create a
                  fulfilling, successful life—both personally and
                  professionally. True prosperity flows from well-rounded
                  wellness.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction
        title="Ready to Take the Next Step?"
        description="Stay ahead of health trends, unlock expert tips, and receive actionable guides—right in your inbox. Join our newsletter and begin your journey toward a healthier, happier life today."
        buttonText="[Subscribe Now"
        buttonLink="/signup"
      />
      <OlwBackgroundBottom />
    </>
  );
};

export default Home;
