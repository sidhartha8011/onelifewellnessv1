import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import from react-intersection-observer
import SEO from "../components/SEO";
import OLWHero from "../components/OLWHero";
import CallToAction from "../components/CallToAction";
import AboutCover from "../assets/images/about.jpeg";
import OurPromise from "../assets/images/empowering.jpg"; //
import ourStory from "../assets/images/olw-our-story.jpg";

import backgroundVideo from "../assets/images/bg-vectors/dna-background.gif";
import OLWLogo from "../assets/images/OLW-logo.png";
import whoWeAre from "../assets/images/olw-who-we-are.jpg";
import Preventive from "../assets/images/preventive.png";
import meditationPerson from "../assets/images/meditation-chakra.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { RiUserCommunityLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const WhoWeAre = () => {
  const seoData = {
    title: "About Us",
    description:
      "Learn more about One Life Wellness, our mission, and our team. Discover how we aim to promote health and mindfulness.",
    keywords: "about us, one life wellness, health, mindfulness",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "About One Life Wellness - Our Mission",
    ogDescription:
      "Discover who we are and what drives One Life Wellness forward.",
  };

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero
        heading="About One Life Wellness"
        subHeading=""
        fontSize="60px"
      />

      {/* Hero Section */}
      <motion.div
        className="olw-whoweare-herosection"
        initial={{ opacity: 0, y: 50 }} // Fade-in-up animation
        animate={{ opacity: 1, y: 0 }} // Make it fully visible and move to the top
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="olw-whoweare-herocontent">
          <h2>
            Where We Began & <br /> Where We’re Headed
          </h2>
          <p>
            We believe that with clear, actionable guidance for the mind and
            body, people can lead healthier, happier, and more fulfilling lives.
            Our vision is to empower individuals to take charge of their
            physical, mental, and emotional well-being by blending modern
            research with practical, fact-based strategies that are easy to
            apply in daily life. Driven by the desire to reach people wherever
            they are, we aim to make preventive care and holistic self-care
            essential pillars of a vibrant, thriving community, rather than
            luxuries.
          </p>

          <Link to="/how-we-work">
          <button className="whoweare-button">Explore More</button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="olw-whoweare-main-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Fade-in effect
      >
        <div className="olw-whoweare-content">
          {/* Who We Are Section */}
          <InViewSection>
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-section-layout">
                <div className="www-section-heading-container">
                  <h3> Who We Are</h3>
                  <h1 className="your-partners-heading-green">
                    Your Partners in Holistic Wellness
                  </h1>
                  <p>
                    We are a diverse team of medical professionals, wellness
                    experts, researchers, and tech enthusiasts sharing one
                    common goal: helping you live your best life—physically,
                    mentally, and emotionally. Our belief is that prevention and
                    proactive self-care are cornerstones of a truly fulfilling
                    existence.
                  </p>
                </div>

                <div className="olw-wsua-heading-layout ">
                  <h3>What Sets Us Apart</h3>

                  <div className="out-wsua-main-layout">
                    <div className="olw-wsua-outer-layout">
                      <div className="primary-blue-bg inner-layout-wsua">
                        <h5 className="your-partners-heading-green white-color-text">
                          Holistic Approach
                        </h5>

                        <p>
                          From mental health to fitness and nutrition, we
                          consider the whole person.
                        </p>
                      </div>

                      <div className="olw-wsua-outer-layout-different-height inner-layout-wsua  eivdence-background">
                        <h5 className="your-partners-heading-green white-color-text">
                          Evidence-Based Guidance
                        </h5>

                        <p className="white-color-text">
                          Our recommendations are based on reliable data and
                          peer-reviewed studies.
                        </p>
                        <div className="overlay-background"></div>
                      </div>
                    </div>

                    <div className="olw-wsua-outer-layout  olw-wsua-mediation-layout olw-wsua-background-image">
                      <img
                        src={backgroundVideo}
                        alt="Welcome One"
                        className="wwa-video-bg"
                      />

                      <img
                        src={meditationPerson}
                        alt="meditationPerson"
                        className="mediation-person"
                      />
                      <img
                        src={OLWLogo}
                        alt="Scrolling Image"
                        className="wwa-page-scrolling"
                      />
                      <img
                        src={backgroundVideo}
                        alt="Welcome One"
                        className="wwa-video-bg-reverse"
                      />
                    </div>

                    <div className="olw-wsua-outer-layout">
                      <div className="olw-wsua-outer-layout-different-height inner-layout-wsua people-over-profit-bg">
                        <h5 className="your-partners-heading-green white-color-text">
                          People Over Profit
                        </h5>

                        <p className="white-color-text">
                          We focus on empowering and educating rather than
                          pushing products.
                        </p>
                        <div className="overlay-background"></div>
                      </div>
                      <div className="primary-green-bg inner-layout-wsua">
                        <h5 className="your-partners-heading-green  white-color-text">
                          Empathy & Accessibility
                        </h5>

                        <p className=" white-color-text">
                          We communicate in plain language to ensure
                          accessibility for all.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <ul className="olw-whoweare-whatsset-section">
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h5 className="your-partners-heading-green">
                        Holistic Approach
                      </h5>{" "}
                      From mental health to fitness and nutrition, we consider
                      the whole person.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h5 className="your-partners-heading-green">
                        Evidence-Based Guidance
                      </h5>{" "}
                      Our recommendations stem from trustworthy data and
                      peer-reviewed studies.
                    </motion.li>
                  </ul>
                  <div className="olw-whoweare-whatsset-section"></div>
                  <ul className="olw-whoweare-whatsset-section">
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h5 className="your-partners-heading-green">
                        People Over Profit
                      </h5>{" "}
                      We focus on empowering and educating rather than pushing
                      products.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h5 className="your-partners-heading-green">
                        Empathy & Accessibility
                      </h5>{" "}
                      We present information in plain language, making it
                      accessible to individuals and families.
                    </motion.li>
                  </ul> */}
                </div>
              </div>
            </div>
          </InViewSection>

          {/* Core Beliefs Section */}
          <InViewSection>
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-our-core-layout">
                <div className="www-section-heading-container">
                  <h3>Our Core Beliefs</h3>
                  <h1 className="your-partners-heading-green">
                    Building a Sustainable Path to Wellness
                  </h1>
                </div>
                <div className="olw-whoweare-core-section">
                  <ul className="olw-whoweare-core-layout">
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4>
                        Preventive Care
                        <FaHandsHoldingChild className="www-core-layout-icon" />
                      </h4>{" "}
                      Address potential health concerns before they become
                      overwhelming.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4>
                        Informed Choices{" "}
                        <GiInfo className="www-core-layout-icon" />
                      </h4>{" "}
                      Offer transparent, accurate information that respects your
                      autonomy.
                    </motion.li>
                  </ul>
                  <ul className="olw-whoweare-core-layout">
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4>
                        Sustainable Routines{" "}
                        <FaRegClock className="www-core-layout-icon" />
                      </h4>{" "}
                      Encourage small, consistent steps over short-lived,
                      drastic changes.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h4>
                        Community Support{" "}
                        <RiUserCommunityLine className="www-core-layout-icon" />
                      </h4>{" "}
                      Cultivate a space where everyone can learn, share, and
                      grow together.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </InViewSection>

          {/* Meet the Minds Section */}
          <InViewSection>
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-section-layout">
                <div className="www-section-heading-container">
                  <h3>Meet the Minds</h3>
                  <h1 className="your-partners-heading-green">
                    Experts, Enthusiasts & Innovators
                  </h1>
                </div>
                <ul className="olw-whoweare-meet-minds-points">
                  <motion.li
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={OLWLogo}
                    />
                    <div className="olw-whoweare-meet-minds-iner-layout primary-light-blue-bg">
                      <h4>The Collective Team</h4>
                      We are a diverse group of health and fitness experts,
                      enthusiasts, and innovators. Our team blends healthcare
                      professionals, fitness lovers, and patient experience.
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="olw-whoweare-meet-minds-iner-layout primary-light-green-bg">
                      <h4>The Innovators</h4>
                      We’re technology geeks using modern tools to simplify
                      health management. Our logistics specialists ensure
                      seamless support to enhance every aspect.
                    </div>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={OLWLogo}
                    />
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={OLWLogo}
                    />
                    <div className="olw-whoweare-meet-minds-iner-layout primary-light-blue-bg">
                      <h4>Uniting Science</h4>We
                      combine science, compassion, and innovation to create
                      sustainable change. We offer personalized wellness plans
                      and explore the latest health tech.
                    </div>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="olw-whoweare-meet-minds-iner-layout primary-light-green-bg">
                      <h4>Empowering Health </h4>
                      Together, we’re building a community that inspires and
                      empowers individuals. We help people take charge of their
                      health and live life to its fullest potential.
                    </div>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={OLWLogo}
                    />
                  </motion.li>
                </ul>
              </div>
            </div>
          </InViewSection>

          {/* Our Promise Section */}
          <InViewSection>
            <div className="olw-whoweare-section-our-promise-layout">
              <div className="olw-whoweare-section-our-promise">
                <h2>Our Promise: Empowering You, Every Step of the Way</h2>
                <p>
                  Whether you’re seeking lifestyle tips, mental health support,
                  or general health insights, our multidisciplinary team strives
                  to provide science-backed, empathetic guidance. We illuminate
                  a path where you’re in control of your wellness journey—one
                  step at a time.
                </p>
                <blockquote className="wwa-page-quotes">
                  <FaQuoteLeft className="quote-icon" /> We’re more than a
                  team—we’re your partners in navigating a healthier, happier
                  life. <FaQuoteRight className="quote-icon" />
                </blockquote>
              </div>
              <div className="olw-whoweare-section-image">
                <div className="rotated-container">
                  <img
                    src={OurPromise}
                    alt="Our Promise"
                    className="olw-whoweare-our-promise-image"
                  />
                </div>
              </div>
            </div>
          </InViewSection>
        </div>
      </motion.div>

      <div className="bottom-100"></div>

      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Explore Insights"
        buttonLink="/insights"
      />
    </>
  );
};

// Custom InViewSection component
const InViewSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger animation when 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default WhoWeAre;
