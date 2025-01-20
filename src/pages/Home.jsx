import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAnglesDown } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
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
import purpose from "../assets/images/purpose.jpg";
import doctors from "../assets/images/doctors.jpg";
import manual from "../assets/images/mannual.jpg";
import { FaHeart, FaLeaf, FaSyncAlt, FaUsers } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const navSectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const animationsRef = useRef([]);

  const scrollToSection = () => {
    navSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionsData = [
    {
      title: "One Life Wellness: A Manual for Life",
      description: (
        <div>
          <p>
            Life is precious, and you deserve to live it to the fullest. At One
            Life Wellness, we believe that every individual should have access
            to clear, actionable guidance that safeguards both body and mind.
            Our mission is to make proactive healthcare and holistic well-being
            accessible to everyone—regardless of background or starting point.
          </p>
          <p>
            By blending modern research with practical advice, we show you how
            to transform everyday choices into powerful, lasting habits. Whether
            you’re seeking mental clarity, aiming for greater productivity, or
            aspiring to a more abundant lifestyle, we offer evidence-based
            strategies that help you thrive. It’s about nurturing a peaceful
            mind, cultivating a productive lifestyle, and ultimately unlocking a
            prosperous outlook that enriches every facet of your life.
          </p>
        </div>
      ),
      imageAlt: "One Life Wellness Manual",
      imageurl: "https://via.placeholder.com/600x400",
    },
    {
      title: "The Soul of Our Purpose, Vision & Essence",
      description: (
        <div>
          <p>
            We believe the best way to prevent illness is to understand how your
            body and mind work together. Our content translates complex medical
            knowledge into simple, actionable steps, helping you take control of
            your well-being before problems arise.
          </p>
          <p>
            We dream of a world where proactive self-care is second nature,
            where families and communities flourish under a culture of
            prevention rather than cure. Our vision is a place where mental
            clarity, physical vitality, and emotional balance shape everyday
            life.
          </p>
        </div>
      ),
      imageAlt: "Soul of Our Purpose",
      imageurl: "https://via.placeholder.com/600x400",
    },
    {
      title: "Essence",
      description: (
        <div>
          <ul>
            <li>
              <strong>Trust & Transparency:</strong> Every article is carefully
              reviewed by experts, ensuring reliability and accuracy.
            </li>
            <li>
              <strong>Holistic Focus:</strong> We cover everything from physical
              fitness to mental health, nutrition, and lifestyle optimization.
            </li>
            <li>
              <strong>Empowering Simplicity:</strong> No complicated jargon—just
              straightforward guidance you can apply in daily life.
            </li>
          </ul>
        </div>
      ),
      imageAlt: "Essence of Our Vision",
      imageurl: "https://via.placeholder.com/600x400",
    },
    {
      title: "Meet the Hearts Behind Our Mission",
      description: (
        <div>
          <p>
            We are a diverse collective of doctors, wellness experts, and tech
            enthusiasts, united by a passion for preventive healthcare and
            sustainable living. Having witnessed firsthand how early
            intervention can transform lives, we’ve dedicated ourselves to
            sharing knowledge in a way that’s both easy to understand and simple
            to implement.
          </p>
          <blockquote>
            "We do what we do because life is a gift—one that should be
            nurtured, protected, and celebrated."
          </blockquote>
        </div>
      ),
      imageAlt: "Meet the Team",
      imageurl: "https://via.placeholder.com/600x400",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray(".olw-welcome-page-roadmap-section");

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: ".olw-welcome-page-horizontal-scroll",
      pin: true,
      scrub: 1,
      end: () => `+=${sections.length * window.innerWidth}`,
      animation: gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      }),
    });

    sections.forEach((section) => {
      const elements = section.querySelectorAll(
        ".olw-welcome-page-fadeIn, .olw-welcome-page-fadeInLeft, .olw-welcome-page-fadeInRight"
      );
      if (elements.length > 0) {
        const animation = gsap.from(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
          },
        });
        animationsRef.current.push(animation);
      }
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      animationsRef.current.forEach((animation) => {
        if (animation.scrollTrigger) {
          animation.scrollTrigger.kill();
        }
        animation.kill();
      });
    };
  }, []);

  return (
    <>
      <OlwBackgroundTop />
      <div className="olw-home-page">
        <div className="olw-home-content-box ">
          <div className="olw-home-left">
            <h2 className="fadeInUp">Empower Your Health, Empower Your Life</h2>
            <h3 className="fadeInUp">
              A One-Stop Guide to Living Well—Body, Mind, and Spirit
            </h3>
            <p className="fadeInUp">
              Welcome to One Life Wellness, your comprehensive platform for
              health, lifestyle, and psychological insights. Discover actionable
              strategies and expert-driven resources to help you and your family
              thrive at every stage of life.
            </p>

            <button className="home-button" onClick={scrollToSection}>
              <span className="home-button-icon">
                <FaAnglesDown />
              </span>
            </button>
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
      </div>

      {/* Intro Sections */}
      <div ref={containerRef}>
        <div className="olw-welcome-page-horizontal-scroll"   ref={navSectionRef}>
          <div className="olw-welcome-page-how-we-are-going-to">
            {sectionsData.map(
              ({ title, description, imageAlt, imageurl }, index) => (
                <section
                  className="olw-welcome-page-roadmap-section"
                  key={index}
                >
                  <div className="olw-welcome-page-section-content">
                    <div className="olw-welcome-page-section-image">
                      <img
                        src={imageurl}
                        alt={imageAlt}
                        className="olw-welcome-page-about-us-image-layout"
                      />
                    </div>
                    <div className="olw-welcome-page-section-text">
                      <h2>{title}</h2>
                      {description}
                    </div>
                  </div>
                </section>
              )
            )}
          </div>
        </div>
      </div>

      {/* Triple Path Section */}
      <div className="olw-welcome-triple-path-section">
        <div className="olw-welcome-content-box">
          <h2>Our Triple Path to Thriving</h2>
          <ul className="olw-welcome-triple-path-list">
            <li>
              <GiMeditation className="olw-welcome-icon" />
              <h3>Peace</h3>
              <p>
                Build emotional resilience and foster a calm, focused mind to
                handle life’s demands. By nourishing inner harmony, you create a
                solid foundation for overall well-being.
              </p>
            </li>
            <li>
              <AiOutlineLaptop className="olw-welcome-icon" />
              <h3>Productivity</h3>
              <p>
                Leverage proven routines, effective planning, and preventive
                care to maintain high energy and accomplish more with less
                stress. When health and structure align, you flourish in every
                task.
              </p>
            </li>
            <li>
              <GrGrow className="olw-welcome-icon" />
              <h3>Prosperity</h3>
              <p>
                Develop an abundant mindset, aligning physical health and mental
                clarity to create a fulfilling, successful life—both personally
                and professionally. True prosperity flows from well-rounded
                wellness.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Articles Section */}
      <div className="olw-welcome-articles-section">
        <div className="olw-welcome-section-header">
          <h1>Stay Informed, Stay Inspired</h1>
          <p>
            Dive into our expert-curated articles designed for busy individuals.
            Learn quick tips, proven strategies, and emerging trends to enhance
            your lifestyle and well-being.
          </p>
        </div>
        <div className="olw-welcome-articles-list">
          <div className="olw-welcome-article-card">
            <h3>Mastering Stress: 5 Practical Techniques for Busy Schedules</h3>
            <div>
              <FaArrowCircleRight className="olw-welcome-article-icon" />
            </div>
          </div>
          <div className="olw-welcome-article-card">
            <h3>Heart Health Essentials: Keeping Your Family Safe & Active</h3>
            <div>
              <FaArrowCircleRight className="olw-welcome-article-icon" />
            </div>
          </div>
          <div className="olw-welcome-article-card">
            <h3>
              Mental Wellness Matters: Simple Steps to Boost Emotional
              Resilience
            </h3>
            <div>
              <FaArrowCircleRight className="olw-welcome-article-icon" />
            </div>
          </div>
        </div>
      </div>

      <CallToAction
        title="Ready to Take the Next Step?"
        description="Stay ahead of health trends, unlock expert tips, and receive actionable guides—right in your inbox. Join our newsletter and begin your journey toward a healthier, happier life today."
        buttonText="Subscribe Now"
        buttonLink="/signup"
      />
      <OlwBackgroundBottom />
    </>
  );
};

export default Home;
