import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import OLWHero from "../components/OLWHero";
import CallToAction from "../components/CallToAction";
import { FaHeart, FaLeaf, FaSyncAlt, FaUsers } from "react-icons/fa";
import {
  FaBook,
  FaUserCheck,
  FaClipboardList,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";

const HowWeAreGoingTo = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "linear-gradient(204deg, rgba(2,39,89,1) 0%, rgba(186,248,110,1) 100%)"
  );

  // const slideBackgrounds = [
  //   "#022759", // Background for Slide 1
  //   "#8ae915", // Background for Slide 2
  //   "#e4e5ff", // Background for Slide 3
  //   "#e0ffba", // Background for Slide 4
  //   "#7ade00", // Background for Slide 5
  // ];

  const slideBackgrounds = [
    "#e4e5ff",
    "#b0e84d",
    "#f1f2ff",
    "#d2f9a5",
    "#a4e632",
  ];

  const handleSlideChange = (swiper) => {
    const visibleIndex = swiper.realIndex; // Use `realIndex` for looped slides
    const newBackground =
      slideBackgrounds[visibleIndex % slideBackgrounds.length];
    setBackgroundColor(newBackground);
  };

  const seoData = {
    title: "How We Are Going to Achieve Wellness",
    description:
      "Discover the integrated path to health and happiness at One Life Wellness. Our roadmap helps you achieve lasting well-being.",
    keywords: "wellness, holistic health, roadmap, wellness community",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "How We Are Going to Achieve Wellness - Our Approach",
    ogDescription:
      "Explore our step-by-step approach to achieving holistic health and wellness.",
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 1.5 },
  };

  const zoomIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 1.5 },
  };

  const fadeInRight = (delay = 0) => ({
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay },
  });

  const fadeInLeft = (delay = 0) => ({
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay },
  });

  const roadmapData = [
    {
      title: "Awareness & Education",
      icon: <FaBook />,
      content: (
        <div>
          <p>
            We start by simplifying complex health concepts so you can make
            informed decisions about your body and mind. Through easy-to-read
            articles, infographics, and expert-led discussions, we help you
            understand:
          </p>
          <ul>
            <li>The importance of preventive care over reactive treatment.</li>
            <li>
              How small, consistent actions can ward off bigger health
              challenges.
            </li>
            <li>
              Ways to spot early signs and symptoms, so you can seek solutions
              proactively.
            </li>
          </ul>
          <p>
            Key Benefit: By educating yourself first, you're already taking a
            huge step toward lifelong wellness.
          </p>
        </div>
      ),
    },
    {
      title: "Personalized Assessments",
      icon: <FaUserCheck />,
      content: (
        <div>
          <p>
            No two individuals are exactly alike. That's why we encourage you to
            reflect on your unique lifestyle, genetics, and personal goals. Our
            resources—ranging from self-evaluation checklists to specialized
            health tips—help you pinpoint areas of improvement.
          </p>
          <p>
            Key Benefit: Customizing your journey makes sustainable results far
            more achievable.
          </p>
        </div>
      ),
    },
    {
      title: "Actionable Routines & Tools",
      icon: <FaClipboardList />,
      content: (
        <div>
          <p>
            Knowledge is only powerful when it leads to action. We provide
            step-by-step guides and curated wellness routines that blend
            seamlessly into your daily life.
          </p>
          <ul>
            <li>Nutritional insights for balanced meals and mindful eating.</li>
            <li>
              Lifestyle hacks that boost productivity and help manage stress.
            </li>
            <li>
              Fitness guidelines ranging from beginner exercises to advanced
              training plans.
            </li>
          </ul>
          <p>
            Key Benefit: Turn insights into habits without overhauling your
            entire life.
          </p>
        </div>
      ),
    },
    {
      title: "Continuous Support & Motivation",
      icon: <FaHandsHelping />,
      content: (
        <div>
          <p>
            True transformation isn't an overnight endeavor—it's a journey. We
            aim to keep you motivated by offering:
          </p>
          <ul>
            <li>
              Regular updates with fresh, research-backed articles and
              resources.
            </li>
            <li>
              Encouraging tips on stress management, sleep optimization, and
              more.
            </li>
            <li>
              Opportunities to connect with others on similar paths, fostering a
              sense of shared growth.
            </li>
          </ul>
          <p>
            Key Benefit: You'll never feel alone as you navigate life's health
            challenges and triumphs.
          </p>
        </div>
      ),
    },
    {
      title: "Measurable Progress & Adaptation",
      icon: <FaChartLine />,
      content: (
        <div>
          <p>
            As you grow and evolve, so do your health needs. We encourage you to
            track your improvements—whether through self-assessments,
            journaling, or professional check-ins.
          </p>
          <p>
            Key Benefit: Keeping tabs on your progress ensures you continue
            moving forward in the right direction.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero heading="A Roadmap to Holistic Wellness" fontSize="60px" />
      
      <motion.h1
        className="hwagt-title"
        initial={{ opacity: 0, y: 50 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 0.6, ease: "easeOut" }} // Transition properties
      >
        Why Our Approach Works
      </motion.h1>
      <div className="olw-whyour-approach-container">
        <div className="olw-whyout-inner-layout">
          <div className="olw-whyout-inner-layout-top">
            {/* First Card */}
            <motion.div
              className="olw-whyout-top-innner-container primary-blue-bg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="olw-hww-icon">
                <motion.button {...zoomIn}>One Life Wellness</motion.button>
                <motion.div className="olw-whyout-top-tcon-layout" {...zoomIn}>
                  <FaHeart className="olw-whyout-top-tcon" />
                </motion.div>
              </div>
              <div>
                <motion.h3 className="olw-hww-point-title" {...fadeInUp}>
                  Holistic
                </motion.h3>
                <motion.p className="olw-hww-point-description" {...fadeInUp}>
                  We address mental, physical, and emotional wellness, ensuring
                  you benefit from a well-rounded strategy.
                </motion.p>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              className="olw-whyout-top-innner-container primary-light-blue-bg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="olw-hww-icon">
                <motion.button {...zoomIn}>One Life Wellness</motion.button>
                <motion.div className="olw-whyout-top-tcon-layout" {...zoomIn}>
                  <FaLeaf className="olw-whyout-top-tcon" />
                </motion.div>
              </div>
              <div>
                <motion.h3 className="olw-hww-point-title" {...fadeInUp}>
                  Empowering
                </motion.h3>
                <motion.p className="olw-hww-point-description" {...fadeInUp}>
                  Instead of imposing complex plans, we provide simple,
                  personalized tools you can adopt at your own pace.
                </motion.p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="olw-whyout-bottom-inner-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="brain-background-wwa"
              {...zoomIn}
            ></motion.div>
          </motion.div>
        </div>

        <div className="olw-whyout-inner-layout">
          <motion.div
            className="olw-whyout-bottom-inner-container "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="falls-background-wwa"
              {...zoomIn}
            ></motion.div>
          </motion.div>
          <div className="olw-whyout-inner-layout-top">
            {/* Third Card */}
            <motion.div
              className="olw-whyout-top-innner-container primary-green-bg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="olw-hww-icon">
                <motion.button {...zoomIn}>One Life Wellness</motion.button>
                <motion.div className="olw-whyout-top-tcon-layout" {...zoomIn}>
                  <FaSyncAlt className="olw-whyout-top-tcon" />
                </motion.div>
              </div>
              <div>
                <motion.h3 className="olw-hww-point-title" {...fadeInUp}>
                  Flexible
                </motion.h3>
                <motion.p className="olw-hww-point-description" {...fadeInUp}>
                  Life changes, and so should your wellness plan. Our resources
                  grow with you, adapting to new challenges and goals.
                </motion.p>
              </div>
            </motion.div>

            {/* Fourth Card */}
            <motion.div
              className="olw-whyout-top-innner-container primary-light-green-bg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="olw-hww-icon">
                <motion.button {...zoomIn}>One Life Wellness</motion.button>
                <motion.div className="olw-whyout-top-tcon-layout" {...zoomIn}>
                  <FaUsers className="olw-whyout-top-tcon" />
                </motion.div>
              </div>
              <div>
                <motion.h3 className="olw-hww-point-title" {...fadeInUp}>
                  Community-Focused
                </motion.h3>
                <motion.p className="olw-hww-point-description" {...fadeInUp}>
                  We believe shared experiences bring deeper understanding and
                  empathy, making your journey more meaningful.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="hwa-how-we-are-going-to"
        style={{ background: backgroundColor, padding: "5%" }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={600}
          onSlideChange={handleSlideChange} // Updated handler
        >
          {roadmapData.map(({ title, icon, content }, index) => (
            <SwiperSlide key={index}>
              <section className="hwa-roadmap-section">
                <motion.div
                  className="hwa-section-content"
                  initial={{ opacity: 0, y: 50 }} // Initial state for fade-in-up
                  animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
                  transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
                >
                  <motion.div
                    className="hwa-section-heading"
                    initial={{ opacity: 0 }} // Initially hidden
                    animate={{ opacity: 1 }} // Fade in the heading
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="hwa-title-with-icon"
                      initial={{ opacity: 0, x: -50 }} // Slide in from the left
                      animate={{ opacity: 1, x: 0 }} // Slide to the normal position
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <h2>{title}</h2>
                      <span className="hwa-icon">{icon}</span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="hwa-section-text"
                    initial={{ opacity: 0 }} // Initially hidden
                    animate={{ opacity: 1 }} // Fade in the content text
                    transition={{ duration: 0.6, delay: 0.3 }} // Delay animation a little for smoother effect
                  >
                    {content}
                  </motion.div>
                </motion.div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bottom-100"></div>
      <div className="bottom-100"></div>
      <CallToAction
        title="Take the Next Step"
        description="Empower your mind, energize your body, and enrich your spirit—one day at a time."
        buttonText="Join Our Community"
        buttonLink="/signup"
      />
    </>
  );
};

export default HowWeAreGoingTo;
