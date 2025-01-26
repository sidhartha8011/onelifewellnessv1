import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SEO from '../components/SEO';
import OLWHero from '../components/OLWHero';
import CallToAction from '../components/CallToAction';
import { FaHeart, FaLeaf, FaSyncAlt, FaUsers } from 'react-icons/fa';
import { FaBook, FaUserCheck, FaClipboardList, FaHandsHelping, FaChartLine } from 'react-icons/fa';

const HowWeAreGoingTo = () => {
  const seoData = {
    title: "How We Are Going to Achieve Wellness",
    description: "Discover the integrated path to health and happiness at One Life Wellness. Our roadmap helps you achieve lasting well-being.",
    keywords: "wellness, holistic health, roadmap, wellness community",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "How We Are Going to Achieve Wellness - Our Approach",
    ogDescription: "Explore our step-by-step approach to achieving holistic health and wellness.",
  };

  const points = [
    { icon: <FaHeart />, title: "Holistic", description: "We address mental, physical, and emotional wellness, ensuring you benefit from a well-rounded strategy." },
    { icon: <FaLeaf />, title: "Empowering", description: "Instead of imposing complex plans, we provide simple, personalized tools you can adopt at your own pace." },
    { icon: <FaSyncAlt />, title: "Flexible", description: "Life changes, and so should your wellness plan. Our resources grow with you, adapting to new challenges and goals." },
    { icon: <FaUsers />, title: "Community-Focused", description: "We believe shared experiences bring deeper understanding and empathy, making your journey more meaningful." },
  ];

  const roadmapData = [
    {
      title: "Awareness & Education",
      icon: <FaBook />,
      content: (
        <div>
          <p>
            We start by simplifying complex health concepts so you can make informed decisions about your body and mind. Through easy-to-read articles, infographics, and expert-led discussions, we help you understand:
          </p>
          <ul>
            <li>The importance of preventive care over reactive treatment.</li>
            <li>How small, consistent actions can ward off bigger health challenges.</li>
            <li>Ways to spot early signs and symptoms, so you can seek solutions proactively.</li>
          </ul>
          <p>Key Benefit: By educating yourself first, you're already taking a huge step toward lifelong wellness.</p>
        </div>
      ),
    },
    {
      title: "Personalized Assessments",
      icon: <FaUserCheck />,
      content: (
        <div>
          <p>
            No two individuals are exactly alike. That's why we encourage you to reflect on your unique lifestyle, genetics, and personal goals. Our resources—ranging from self-evaluation checklists to specialized health tips—help you pinpoint areas of improvement.
          </p>
          <p>Key Benefit: Customizing your journey makes sustainable results far more achievable.</p>
        </div>
      ),
    },
    {
      title: "Actionable Routines & Tools",
      icon: <FaClipboardList />,
      content: (
        <div>
          <p>
            Knowledge is only powerful when it leads to action. We provide step-by-step guides and curated wellness routines that blend seamlessly into your daily life.
          </p>
          <ul>
            <li>Nutritional insights for balanced meals and mindful eating.</li>
            <li>Lifestyle hacks that boost productivity and help manage stress.</li>
            <li>Fitness guidelines ranging from beginner exercises to advanced training plans.</li>
          </ul>
          <p>Key Benefit: Turn insights into habits without overhauling your entire life.</p>
        </div>
      ),
    },
    {
      title: "Continuous Support & Motivation",
      icon: <FaHandsHelping />,
      content: (
        <div>
          <p>
            True transformation isn't an overnight endeavor—it's a journey. We aim to keep you motivated by offering:
          </p>
          <ul>
            <li>Regular updates with fresh, research-backed articles and resources.</li>
            <li>Encouraging tips on stress management, sleep optimization, and more.</li>
            <li>Opportunities to connect with others on similar paths, fostering a sense of shared growth.</li>
          </ul>
          <p>Key Benefit: You'll never feel alone as you navigate life's health challenges and triumphs.</p>
        </div>
      ),
    },
    {
      title: "Measurable Progress & Adaptation",
      icon: <FaChartLine />,
      content: (
        <div>
          <p>
            As you grow and evolve, so do your health needs. We encourage you to track your improvements—whether through self-assessments, journaling, or professional check-ins.
          </p>
          <p>Key Benefit: Keeping tabs on your progress ensures you continue moving forward in the right direction.</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <SEO seoData={seoData} />
      <OLWHero
        heading="A Roadmap to Holistic Wellness"
        fontSize="60px"
      />
      <div className="hwa-how-we-are-going-to">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop
  speed={600} // Smooth animation speed
>
          {roadmapData.map(({ title, icon, content }, index) => (
            <SwiperSlide key={index}>
              <section className="hwa-roadmap-section">
                <div className="hwa-section-content">
                  <div className="hwa-section-heading">
                    <div className="hwa-title-with-icon">
                      <h2>{title}</h2>
                      <span className="hwa-icon">{icon}</span>
                    </div>
                  </div>
                  <div className="hwa-section-text">{content}</div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bottom-100"></div>
      <div className="hwagt-our-approach-container">
      <h1 className="hwagt-title">Why Our Approach Works</h1>
      <div className="hwagt-points-grid">
        {points.map((point, index) => (
          <div key={index} className="hwagt-icon-box">
            <div className="hwagt-icon">{point.icon}</div>
            <h3 className="hwagt-point-title">{point.title}</h3>
            <p className="hwagt-point-description">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
      <div className="bottom-100"></div>
      <CallToAction
        title="Take the Next Step"
        description="Empower your mind, energize your body, and enrich your spirit—one day at a time."
        buttonText="Join Our Community"
        buttonLink="/signup"
      />
    </div>
  );
};

export default HowWeAreGoingTo;
