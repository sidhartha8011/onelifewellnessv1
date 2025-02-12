import React, { useState } from "react";
import { GiMeditation } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { FaShieldAlt, FaListAlt, FaRegHeart, FaTrophy } from "react-icons/fa";
import { AiOutlineSchedule, AiOutlineGift } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import SEO from "../components/SEO"; // Assuming you have SEO component
import OLWHero from "../components/OLWHero"; // Assuming you have this hero component
import CallToAction from "../components/CallToAction";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

const WhyItMatters = () => {
  const seoData = {
    title: "Why Peace, Productivity, and Prosperity Matter",
    description:
      "Discover how Peace, Productivity, and Prosperity are the three pillars of holistic wellness, leading to a life of fulfillment and transformation.",
    keywords: "peace, productivity, prosperity, wellness, holistic health",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "Why Peace, Productivity, and Prosperity Matter",
    ogDescription:
      "Learn why achieving peace, productivity, and prosperity can transform your life and enhance your well-being.",
  };

  const peace = [
    {
      name: "Mindful Pauses",
      content:
        "Take brief moments throughout the day to breathe slowly and ground yourself.",
      icon: <GiMeditation size={40} className="ppp-icons" />,
    },
    {
      name: "Gentle Self-Reflection",
      content:
        "Notice where stress resides in your body and explore journaling or quiet contemplation to release it.",
      icon: <MdSelfImprovement size={40} className="ppp-icons" />,
    },
    {
      name: "Kind Boundaries",
      content:
        "Learn to say “no” when needed, preserving your emotional energy for what truly matters.",
      icon: <FaShieldAlt size={40} className="ppp-icons" />,
    },
  ];

  const productivity = [
    {
      name: "Purposeful Planning",
      content:
        "Identify your top goals each morning and focus on achieving them with care, rather than racing against the clock.",
      icon: <FaListAlt size={40} className="ppp-icons" />,
    },
    {
      name: "Gentle Structure",
      content:
        "Incorporate short breaks and movement to maintain steady energy, preventing fatigue.",
      icon: <AiOutlineSchedule size={40} className="ppp-icons" />,
    },
    {
      name: "Self-Check-Ins",
      content:
        "Regularly assess how your tasks align with your core values and adjust if you feel off track.",
      icon: <FaRegHeart size={40} className="ppp-icons" />,
    },
  ];

  const prosperity = [
    {
      name: "Cultivate Gratitude",
      content:
        "Recognize the small gifts in each day—acts of kindness, moments of joy, simple comforts.",
      icon: <AiOutlineGift size={40} className="ppp-icons" />,
    },
    {
      name: "Share & Connect",
      content:
        "Engage with others through supportive communities or mutual learning, enriching your sense of purpose.",
      icon: <IoMdPeople size={40} className="ppp-icons" />,
    },
    {
      name: "Celebrate Milestones",
      content:
        "Acknowledge personal achievements—even minor ones—to spark ongoing motivation and confidence.",
      icon: <FaTrophy size={40} className="ppp-icons" />,
    },
  ];

  const [activePeaceTab, setActivePeaceTab] = useState("Mindful Pauses");
  const [activeProductivityTab, setActiveProductivityTab] = useState(
    "Purposeful Planning"
  );
  const [activeProsperityTab, setActiveProsperityTab] = useState(
    "Cultivate Gratitude"
  );

  return (
    <>
      <SEO seoData={seoData} />
      <div className="bottom-50"></div>
      <OLWHero
        heading="A Journey Towards Peace, Productivity & Prosperity"
        subHeading=""
        fontSize="50px"
      />
      <div className="whim-descriptions">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          At One Life Wellness, we believe true well-being comes from aligning
          peace, productivity, and prosperity, fostering inner tranquility,
          meaningful accomplishments, and lasting fulfillment.
        </motion.p>
      </div>
      <div className="bottom-100 olw-stack-container-layout-main">
        <div className="olw-stack-cares-container">
              
                <section className="whim-main-layout">
                  <motion.div
                    className="whim-image-cotainer peace-background"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="quotes">
                      “ In the stillness of a peaceful mind, every breath
                      becomes a gentle reminder of our own resilience. ”
                    </p>
                  </motion.div>
                  <motion.div
                    className="whim-content-container"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    >
                      Peace: The Foundation of Inner Calm
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      Peace is the cornerstone of well-being. By cultivating a
                      peaceful mind and nurturing calm in our lives, we unlock
                      the ability to navigate challenges with resilience.
                    </motion.p>
                    <div className="whim-tab-container">
                      <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                      >
                        Ways to Cultivate Peace
                      </motion.h3>
                      <div className="whim-tab-buttons">
                        {peace.map((tab) => (
                          <motion.button
                            key={tab.name}
                            onClick={() => setActivePeaceTab(tab.name)}
                            className={`whim-tab-button ${
                              activePeaceTab === tab.name ? "whim-active" : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }}
                          >
                            {tab.name}
                          </motion.button>
                        ))}
                      </div>
                      <div className="whim-tab-content">
                        {peace.map(
                          (tab) =>
                            tab.name === activePeaceTab && (
                              <div key={tab.name} className="whim-tab-item">
                                <motion.div
                                  className="whim-tab-item-content"
                                  initial={{ opacity: 0, y: 50 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1, delay: 0.1 }}
                                >
                                  <span className="whim-benefit-title">
                                    Benefits
                                  </span>
                                  <h4 className="whim-tab-title">{tab.name}</h4>
                                  <p className="whim-tab-description">
                                    {tab.content}
                                  </p>
                                </motion.div>
                                <div className="whim-tab-icon">{tab.icon}</div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </section>
              
                <section className="whim-main-layout">
                  <motion.div
                    className="whim-content-container primary-light-green-bg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    >
                      Productivity: Transforming Knowledge into Meaningful
                      Action
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      Productivity isn’t just about crossing items off a list;
                      it’s about channeling your energy in ways that serve your
                      deepest values.
                    </motion.p>
                    <div className="whim-tab-container">
                      <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                      >
                        Ways to Enhance Productivity
                      </motion.h3>
                      <div className="whim-tab-buttons">
                        {productivity.map((tab) => (
                          <motion.button
                            key={tab.name}
                            onClick={() => setActiveProductivityTab(tab.name)}
                            className={`whim-tab-button ${
                              activeProductivityTab === tab.name
                                ? "whim-active"
                                : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }}
                          >
                            {tab.name}
                          </motion.button>
                        ))}
                      </div>
                      <div className="whim-tab-content">
                        {productivity.map(
                          (tab) =>
                            tab.name === activeProductivityTab && (
                              <div key={tab.name} className="whim-tab-item">
                                <motion.div
                                  className="whim-tab-item-content"
                                  initial={{ opacity: 0, y: 50 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1, delay: 0.1 }}
                                >
                                  <span className="whim-benefit-title">
                                    Benefits
                                  </span>
                                  <h4 className="whim-tab-title">{tab.name}</h4>
                                  <p className="whim-tab-description">
                                    {tab.content}
                                  </p>
                                </motion.div>
                                <div className="whim-tab-icon">{tab.icon}</div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="whim-image-cotainer productivity-background"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0 }}
                  >
                    <p className="quotes">
                      “ Productivity flourishes when every task reflects the
                      greater purpose guiding our day-to-day efforts. ”
                    </p>
                  </motion.div>
                </section>
              
                <section className="whim-main-layout">
                  <motion.div
                    className="whim-image-cotainer prosperity-background"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="quotes">
                      “ Prosperity blossoms when the heart brims with gratitude.
                      ”
                    </p>
                  </motion.div>
                  <motion.div
                    className="whim-content-container"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    >
                      Prosperity: Inviting Abundance from the Inside Out
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    >
                      Prosperity goes beyond material gain. It’s a holistic
                      feeling of gratitude, connection, and inner wealth.
                    </motion.p>
                    <div className="whim-tab-container">
                      <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1 }}
                      >
                        Ways to Create Prosperity
                      </motion.h3>
                      <div className="whim-tab-buttons">
                        {prosperity.map((tab) => (
                          <motion.button
                            key={tab.name}
                            onClick={() => setActiveProsperityTab(tab.name)}
                            className={`whim-tab-button ${
                              activeProsperityTab === tab.name
                                ? "whim-active"
                                : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }}
                          >
                            {tab.name}
                          </motion.button>
                        ))}
                      </div>
                      <div className="whim-tab-content">
                        {prosperity.map(
                          (tab) =>
                            tab.name === activeProsperityTab && (
                              <div key={tab.name} className="whim-tab-item">
                                <motion.div
                                  className="whim-tab-item-content"
                                  initial={{ opacity: 0, y: 50 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 1, delay: 0.1 }}
                                >
                                  <span className="whim-benefit-title">
                                    Benefits
                                  </span>
                                  <h4 className="whim-tab-title">{tab.name}</h4>
                                  <p className="whim-tab-description">
                                    {tab.content}
                                  </p>
                                </motion.div>
                                <div className="whim-tab-icon">{tab.icon}</div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </section> 
        </div>  
      </div>
      <CallToAction
        title="Ready to Take the Next Step?"
        description="Stay ahead of health trends, unlock expert tips, and receive actionable guides."
        buttonText="Subscribe Now"
        buttonLink="/signup"
      />
    </>
  );
};

export default WhyItMatters;
