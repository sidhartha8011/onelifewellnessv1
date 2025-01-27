import React, { useRef } from "react";
import { FaAnglesDown, FaArrowRightLong } from "react-icons/fa6";
import { GiMeditation } from "react-icons/gi";
import { AiOutlineLaptop } from "react-icons/ai";
import { GrGrow } from "react-icons/gr";
import { motion } from "framer-motion";
import adults from "../assets/images/cs-images/adults.png";
import children from "../assets/images/cs-images/children.png";
import grandparents from "../assets/images/cs-images/grandparents.png";
import dog from "../assets/images/cs-images/dog.png";
import welcomeOne from "../assets/images/welcome/welcome-one.png";
import welcomeTwo from "../assets/images/welcome/welcome-two.jpg";
import CallToAction from "../components/CallToAction";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import backgroundVideo from "../assets/images/bg-vectors/dna-background.gif";
import OLWLogo from "../assets/images/OLW-logo.png";
import ourSoul from "../assets/images/home/soul-of-purpose.jpeg";

const Home = () => {
  const sectionRefs = {
    about: useRef(null),
    purpose: useRef(null),
    essence: useRef(null),
    team: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section]?.current.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="olw-home-page">
        <div className="olw-home-content-box">
          <motion.div
            className="olw-home-left"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
          >
            <h2>Empower Your Health, Empower Your Life</h2>
            <h3>A One-Stop Guide to Living Well—Body, Mind, and Spirit</h3>
            <p>
              Welcome to One Life Wellness, your comprehensive platform for
              health, lifestyle, and psychological insights. Discover actionable
              strategies and expert-driven resources to help you and your family
              thrive at every stage of life.
            </p>
            <button
              className="home-button"
              onClick={() => scrollToSection("about")}
            >
              <span className="home-button-icon">
                <FaAnglesDown />
              </span>
            </button>
          </motion.div>
          <motion.div
            className="olw-home-right"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
          >
            <img src={backgroundVideo} alt="Welcome One" className="video-bg" />
            <img src={adults} alt="Adults" className="home-adults" />
            <img src={children} alt="Children" className="home-children" />
            <img
              src={grandparents}
              alt="Grandparents"
              className="home-grandparents pointer"
            />
            <img src={dog} alt="Dog" className="home-dog" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="olw-welcome-triple-path-section"
        variants={fadeInDown}
        initial="hidden"
        whileInView="visible"
      >
        <div className="olw-welcome-content-box">
          <h2>Our Triple Path to Thriving</h2>
          <ul className="olw-welcome-triple-path-list">
            <motion.li variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="triple-path-heading">
                <h3 className="gradient-heading">Peace</h3>
                <GiMeditation className="olw-welcome-icon" />
              </div>
              <p>
                Cultivate emotional resilience and inner harmony for a calm,
                focused mind and overall well-being.
              </p>
            </motion.li>
            <motion.li variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="triple-path-heading">
                <h3 className="gradient-heading">Productivity</h3>
                <AiOutlineLaptop className="olw-welcome-icon" />
              </div>

              <p>
                Achieve more with less stress through effective routines,
                planning, and balanced energy.
              </p>
            </motion.li>
            <motion.li variants={fadeInUp} initial="hidden" whileInView="visible">
              <div className="triple-path-heading">
                <h3 className="gradient-heading">Prosperity</h3>
                <GrGrow className="olw-welcome-icon" />
              </div>
              <p>
                Align health and clarity to foster an abundant mindset for
                personal and professional success.
              </p>
            </motion.li>
          </ul>
        </div>
      </motion.div>

      <div ref={sectionRefs.about} className="olw-section">
        <motion.div
          className="olw-home-manual-layout"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="olw-home-manual-section">
            <h2>One Life Wellness: A Manual for Life</h2>
            <p className="olw-home-manual-section-para">
              Life is precious, and you deserve to live it to the fullest. At
              One Life Wellness, we believe that every individual should have
              access to clear, actionable guidance that safeguards both body and
              mind. Our mission is to make proactive healthcare and holistic
              well-being accessible to everyone—regardless of background or
              starting point.
            </p>
          </div>
          <div className="olw-section-image-layout">
            <motion.img
              src={welcomeOne}
              alt="Welcome One"
              className="olw-mannual-section-image"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            />
          </div>
        </motion.div>
      </div>

      <div ref={sectionRefs.about} className="olw-section">
        <motion.div
          className="olw-home-manual-layout"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
        >
          <div className="olw-section-image-layout">
            <motion.img
              src={ourSoul}
              alt="Our Soul"
              className="olw-mannual-section-image"
            />
          </div>
          <div className="olw-home-manual-section">
            <h2>The Soul of Our Purpose, Vision & Essence</h2>
            <p className="olw-home-manual-section-para">
              We believe the best way to prevent illness is to understand how
              your body and mind work together. Our content translates complex
              medical knowledge into simple, actionable steps, helping you take
              control of your well-being before problems arise.
            </p>
            <p className="olw-home-manual-section-para">
              We dream of a world where proactive self-care is second nature,
              where families and communities flourish under a culture of
              prevention rather than cure. Our vision is a place where mental
              clarity, physical vitality, and emotional balance shape everyday
              life.
            </p>
          </div>
        </motion.div>
      </div>

      <div ref={sectionRefs.essence} className="olw-section">
        <motion.div
          className="olw-section-content"
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
        >
          <div className="olw-section-text">
            <h2>Essence</h2>
            <ul className="essence-section-home-layout">
              <motion.li
                className="primary-blue-bg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                <h4>Trust & Transparency</h4>
                <p>
                  Every article is carefully reviewed by experts, ensuring
                  reliability and accuracy.
                </p>
              </motion.li>

              <motion.li
                className="primary-light-blue-bg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                <h4>Empowering Simplicity</h4>
                <p>
                  No complicated jargon— just straightforward guidance you can
                  apply in daily life.
                </p>
              </motion.li>
              <motion.li
                className="primary-green-bg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                <h4>Holistic Focus</h4>
                <p>
                  We cover everything from physical fitness to mental health,
                  nutrition, and lifestyle optimization.
                </p>
              </motion.li>
              <motion.li
                className="justify-between primary-light-green-bg"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
              >
                <h4>Learn More About Us</h4>
                <button className="essence-section-button">Know More</button>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div ref={sectionRefs.team} className="olw-section">
        <motion.div
          className="olw-section-content"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <div className="olw-meet-heart-layout gradient-background">
            <h2 className="olw-meet-heart-layout-heading">
              Meet the Hearts Behind Our Mission
            </h2>
            <p className="olw-meet-heart-layout-para">
              We are a diverse collective of doctors, wellness experts, and
              tech enthusiasts, united by a passion for preventive healthcare
              and sustainable living. Having witnessed firsthand how early
              intervention can transform lives, we’ve dedicated ourselves to
              sharing knowledge in a way that’s both easy to understand and
              simple to implement.
            </p>
            <blockquote className="home-page-quotes">
              <FaQuoteLeft className="quote-icon" /> We do what we do because
              life is a gift—one that should be nurtured, protected, and
              celebrated. <FaQuoteRight className="quote-icon" />
            </blockquote>
          </div>
        </motion.div>
      </div>

      <div className="olw-welcome-articles-section">
        <div className="scrolling-logo-div">
          <img
            src={OLWLogo}
            alt="Scrolling Image"
            className="home-page-scrolling"
          />
        </div>
        <div className="olw-welcome-section-header">
          <div className="olw-welcome-article-section">
            <h1>Stay Informed, Stay Inspired</h1>
            <p>
              Dive into our expert-curated articles designed for busy
              individuals. Learn quick tips, proven strategies, and emerging
              trends to enhance your lifestyle and well-being.
            </p>
          </div>

          <div>
            <button className="articles-category">One Life Wellness</button>
          </div>
        </div>
        <div className="olw-welcome-articles-list">
          <div className="olw-welcome-article-card">
            <h3 className="olw-welcome-article-heading">
              Mastering Stress: 5 Practical Techniques for Busy Schedules
            </h3>
            <button>
              Read more{" "}
              <FaArrowRightLong className="olw-welcome-article-icon" />
            </button>
          </div>
          <div className="olw-welcome-article-card">
            <h3 className="olw-welcome-article-heading">
              Heart Health Essentials: Keeping Your Family Safe & Active
            </h3>
            <button>
              Read more{" "}
              <FaArrowRightLong className="olw-welcome-article-icon" />
            </button>
          </div>
          <div className="olw-welcome-article-card">
            <h3 className="olw-welcome-article-heading">
              Mental Wellness Matters: Simple Steps to Boost Emotional
              Resilience
            </h3>
            <button>
              Read more{" "}
              <FaArrowRightLong className="olw-welcome-article-icon" />
            </button>
          </div>
        </div>
      </div>

      <CallToAction
        title="Ready to Take the Next Step?"
        description="Stay ahead of health trends, unlock expert tips, and receive actionable guides—right in your inbox. Join our newsletter and begin your journey toward a healthier, happier life today."
        buttonText="Subscribe Now"
        buttonLink="/signup"
      />
    </>
  );
};

export default Home;
