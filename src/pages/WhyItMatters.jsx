import React, { useState } from 'react';
import { GiMeditation } from 'react-icons/gi';
import { MdSelfImprovement } from 'react-icons/md';
import { FaShieldAlt, FaListAlt, FaRegHeart, FaTrophy } from 'react-icons/fa';
import { AiOutlineSchedule, AiOutlineGift } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import SEO from '../components/SEO'; // Assuming you have SEO component
import OLWHero from '../components/OLWHero'; // Assuming you have this hero component
import CallToAction from '../components/CallToAction';

const WhyItMatters = () => {
  const seoData = {
    title: "Why Peace, Productivity, and Prosperity Matter",
    description: "Discover how Peace, Productivity, and Prosperity are the three pillars of holistic wellness, leading to a life of fulfillment and transformation.",
    keywords: "peace, productivity, prosperity, wellness, holistic health",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "Why Peace, Productivity, and Prosperity Matter",
    ogDescription: "Learn why achieving peace, productivity, and prosperity can transform your life and enhance your well-being.",
  };

  const peace = [
    {
      name: 'Mindful Pauses',
      content: 'Take brief moments throughout the day to breathe slowly and ground yourself.',
      icon: <GiMeditation size={40} className='ppp-icons' />,
    },
    {
      name: 'Gentle Self-Reflection',
      content: 'Notice where stress resides in your body and explore journaling or quiet contemplation to release it.',
      icon: <MdSelfImprovement size={40} className='ppp-icons' />,
    },
    {
      name: 'Kind Boundaries',
      content: 'Learn to say “no” when needed, preserving your emotional energy for what truly matters.',
      icon: <FaShieldAlt size={40} className='ppp-icons' />,
    },
  ];

  const productivity = [
    {
      name: 'Purposeful Planning',
      content: 'Identify your top goals each morning and focus on achieving them with care, rather than racing against the clock.',
      icon: <FaListAlt size={40} className='ppp-icons' />,
    },
    {
      name: 'Gentle Structure',
      content: 'Incorporate short breaks and movement to maintain steady energy, preventing fatigue.',
      icon: <AiOutlineSchedule size={40} className='ppp-icons' />,
    },
    {
      name: 'Self-Check-Ins',
      content: 'Regularly assess how your tasks align with your core values and adjust if you feel off track.',
      icon: <FaRegHeart size={40} className='ppp-icons' />,
    },
  ];

  const prosperity = [
    {
      name: 'Cultivate Gratitude',
      content: 'Recognize the small gifts in each day—acts of kindness, moments of joy, simple comforts.',
      icon: <AiOutlineGift size={40} className='ppp-icons' />,
    },
    {
      name: 'Share & Connect',
      content: 'Engage with others through supportive communities or mutual learning, enriching your sense of purpose.',
      icon: <IoMdPeople size={40} className='ppp-icons' />,
    },
    {
      name: 'Celebrate Milestones',
      content: 'Acknowledge personal achievements—even minor ones—to spark ongoing motivation and confidence.',
      icon: <FaTrophy size={40} className='ppp-icons' />,
    },
  ];

  const [activePeaceTab, setActivePeaceTab] = useState('Mindful Pauses');
  const [activeProductivityTab, setActiveProductivityTab] = useState('Purposeful Planning');
  const [activeProsperityTab, setActiveProsperityTab] = useState('Cultivate Gratitude');

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero
        heading="A Journey Towards"
        subHeading="Peace, Productivity & Prosperity"
        fontSize="80px"
      />
      <div className="whim-descriptions">
        <p>
          At One Life Wellness, we believe true well-being comes from aligning peace, productivity, and prosperity, fostering inner tranquility, meaningful accomplishments, and lasting fulfillment.
        </p>
      </div>
      <div className="bottom-100">
        {/* Peace Section */}
        <section className="whim-main-layout">
          <div className="whim-image-cotainer peace-background">
            <p>“ In the stillness of a peaceful mind, every breath becomes a gentle reminder of our own resilience. ”</p>
          </div>
          <div className="whim-content-container">
            <h2>Peace: The Foundation of Inner Calm</h2>
            <p>
              Peace is the cornerstone of well-being. By cultivating a peaceful mind and nurturing calm in our lives, we unlock the ability to navigate challenges with resilience.
            </p>
            <div className="whim-tab-container">
              <h3>Ways to Cultivate Peace</h3>
              <div className="whim-tab-buttons">
                {peace.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActivePeaceTab(tab.name)}
                    className={`whim-tab-button ${activePeaceTab === tab.name ? 'whim-active' : ''}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="whim-tab-content">
                {peace.map(
                  (tab) =>
                    tab.name === activePeaceTab && (
                      <div key={tab.name} className="whim-tab-item">
                        <div className="whim-tab-item-content">
                          <span className="whim-benefit-title">Benefits</span>
                          <h4 className="whim-tab-title">{tab.name}</h4>
                          <p className="whim-tab-description">{tab.content}</p>
                        </div>
                        <div className="whim-tab-icon">{tab.icon}</div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Productivity Section */}
        <section className="whim-main-layout">
          <div className="whim-content-container">
            <h2>Productivity: Transforming Knowledge into Meaningful Action</h2>
            <p>
              Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values.
            </p>
            <div className="whim-tab-container">
              <h3>Ways to Enhance Productivity</h3>
              <div className="whim-tab-buttons">
                {productivity.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveProductivityTab(tab.name)}
                    className={`whim-tab-button ${activeProductivityTab === tab.name ? 'whim-active' : ''}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="whim-tab-content">
                {productivity.map(
                  (tab) =>
                    tab.name === activeProductivityTab && (
                      <div key={tab.name} className="whim-tab-item">
                        <div className="whim-tab-item-content">
                          <span className="whim-benefit-title">Benefits</span>
                          <h4 className="whim-tab-title">{tab.name}</h4>
                          <p className="whim-tab-description">{tab.content}</p>
                        </div>
                        <div className="whim-tab-icon">{tab.icon}</div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="whim-image-cotainer productivity-background">
            <p>“ Productivity flourishes when every task reflects the greater purpose guiding our day-to-day efforts. ”</p>
          </div>
        </section>

        {/* Prosperity Section */}
        <section className="whim-main-layout">
          <div className="whim-image-cotainer prosperity-background">
            <p>“ Prosperity blossoms when the heart brims with gratitude. ”</p>
          </div>
          <div className="whim-content-container">
            <h2>Prosperity: Inviting Abundance from the Inside Out</h2>
            <p>
              Prosperity goes beyond material gain. It’s a holistic feeling of gratitude, connection, and inner wealth.
            </p>
            <div className="whim-tab-container">
              <h3>Ways to Create Prosperity</h3>
              <div className="whim-tab-buttons">
                {prosperity.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveProsperityTab(tab.name)}
                    className={`whim-tab-button ${activeProsperityTab === tab.name ? 'whim-active' : ''}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="whim-tab-content">
                {prosperity.map(
                  (tab) =>
                    tab.name === activeProsperityTab && (
                      <div key={tab.name} className="whim-tab-item">
                        <div className="whim-tab-item-content">
                          <span className="whim-benefit-title">Benefits</span>
                          <h4 className="whim-tab-title">{tab.name}</h4>
                          <p className="whim-tab-description">{tab.content}</p>
                        </div>
                        <div className="whim-tab-icon">{tab.icon}</div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <CallToAction
        title="Ready to Take the Next Step?"
        description="Stay ahead of health trends, unlock expert tips, and receive actionable guides."
        buttonText="[Subscribe Now]"
        buttonLink="/signup"
      />
    </>
  );
};

export default WhyItMatters;
