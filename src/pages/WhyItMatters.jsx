import React, { useState } from 'react';
import SEO from '../components/SEO'; // Assuming you have SEO component
import OLWHero from '../components/OLWHero'; // Ass

const WhyItMatters = () => {
  const seoData = {
    title: "Why Peace, Productivity, and Prosperity Matter",
    description: "Discover how Peace, Productivity, and Prosperity are the three pillars of holistic wellness, leading to a life of fulfillment and transformation.",
    keywords: "peace, productivity, prosperity, wellness, holistic health",
    ogImage: "https://via.placeholder.com/1200x630", // Placeholder image
    ogTitle: "Why Peace, Productivity, and Prosperity Matter",
    ogDescription: "Learn why achieving peace, productivity, and prosperity can transform your life and enhance your well-being.",
  };

  // Tabs Data
  const tabs = [
    {
      name: 'Purposeful Planning',
      content: 'Identify your top goals each morning and focus on achieving them with care, rather than racing against the clock.',
      img: '', // Add your image source here
    },
    {
      name: 'Gentle Structure',
      content: 'Create a flexible yet structured approach to your day, balancing goals with time for spontaneity and relaxation.',
      img: '', // Add your image source here
    },
    {
      name: 'Self-Check-Ins',
      content: 'Take regular breaks throughout the day to assess your progress and adjust your plans accordingly.',
      img: '', // Add your image source here
    },
  ];

  const [activeTab, setActiveTab] = useState('Purposeful Planning');

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero
        heading="A Journey Towards"
        subHeading='Peace, Productivity & Prosperity'
        fontSize="80px" // Adjust font size dynamically if needed
      />
      <div className='whim-descriptions'>
        <p>
         At One Life Wellness, we believe true well-being comes from aligning peace, productivity, and prosperity, fostering inner tranquility, meaningful accomplishments, and lasting fulfillment. Our holistic approach empowers you to shape a purposeful, connected, and transformative life. </p>
      </div>
      <div className='bottom-100'>
        <section className='whim-main-layout'>
          <div className='whim-image-cotainer'>
            <p>“ In the stillness of a peaceful mind, every breath becomes a gentle reminder of our own resilience. ”</p>
          </div>
          <div className='whim-content-container'>
            <div className='whim-cc-top'>
            <h2>Productivity: Transforming Knowledge into Meaningful Action</h2>
            <p>
              Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values. When you clarify your priorities and use small, deliberate steps, you prevent burnout and stay aligned with what genuinely enriches your life. By weaving together intention, routine, and personal growth, productivity becomes an affirming process rather than a draining one.
            </p>
            </div>

            {/* Tab Section */}
            <div className='whim-tab-container'>
            <h3>Ways to</h3>
            <div className="whim-tab-buttons">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`whim-tab-button ${activeTab === tab.name ? 'whim-active' : ''}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            </div>

            <div className="whim-tab-content">
              {tabs.map(
                (tab) =>
                  tab.name === activeTab && (
                    <div key={tab.name} className="whim-tab-item">
                      <div className='whim-tab-item-content'>
                        <span className="whim-benefit-title">Benefits</span>
                        <h4 className="whim-tab-title">{tab.name}</h4>
                        <p className="whim-tab-description">{tab.content}</p>
                      </div>
                      <div className="whim-tab-image">
                        <img src={tab.img} alt={tab.name} />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>

        <section className='whim-main-layout'>
          
          <div className='whim-content-container'>
            <div className='whim-cc-top'>
              <h2>Productivity: Transforming Knowledge into Meaningful Action</h2>
              <p>
                Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values. When you clarify your priorities and use small, deliberate steps, you prevent burnout and stay aligned with what genuinely enriches your life. By weaving together intention, routine, and personal growth, productivity becomes an affirming process rather than a draining one.
              </p>
            </div>

            {/* Tab Section */}
            <div className='whim-tab-container'>
            <h3>Ways to</h3>
            <div className="whim-tab-buttons">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`whim-tab-button ${activeTab === tab.name ? 'whim-active' : ''}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            </div>

            <div className="whim-tab-content">
              {tabs.map(
                (tab) =>
                  tab.name === activeTab && (
                    <div key={tab.name} className="whim-tab-item">
                      <div className='whim-tab-item-content'>
                        <span className="whim-benefit-title">Benefits</span>
                        <h4 className="whim-tab-title">{tab.name}</h4>
                        <p className="whim-tab-description">{tab.content}</p>
                      </div>
                      <div className="whim-tab-image">
                        <img src={tab.img} alt={tab.name} />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div className='whim-image-cotainer'>
            <p>“ Productivity flourishes when every task reflects the greater purpose guiding our day-to-day efforts. ”</p>
          </div> 
        </section>

        <section className='whim-main-layout'>
          <div className='whim-image-cotainer'>
            <p>“ Prosperity blossoms when the heart brims with gratitude, and each choice honors the abundance that life can offer. ”</p>
          </div>
          <div className='whim-content-container'>
          <div className='whim-cc-top'>
            <h2>Productivity: Transforming Knowledge into Meaningful Action</h2>
            <p>
              Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values. When you clarify your priorities and use small, deliberate steps, you prevent burnout and stay aligned with what genuinely enriches your life. By weaving together intention, routine, and personal growth, productivity becomes an affirming process rather than a draining one.
            </p>
            </div>

            {/* Tab Section */}
            <div className='whim-tab-container'>
              
            <h3>Ways to</h3>
            <div className="whim-tab-buttons">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`whim-tab-button ${activeTab === tab.name ? 'whim-active' : ''}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            </div>
            <div className="whim-tab-content">
              {tabs.map(
                (tab) =>
                  tab.name === activeTab && (
                    <div key={tab.name} className="whim-tab-item">
                      <div className='whim-tab-item-content'>
                        <span className="whim-benefit-title">Benefits</span>
                        <h4 className="whim-tab-title">{tab.name}</h4>
                        <p className="whim-tab-description">{tab.content}</p>
                      </div>
                      <div className="whim-tab-image">
                        <img src={tab.img} alt={tab.name} />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyItMatters;
