import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import OLWHero from "../components/OLWHero";
import CallToAction from "../components/CallToAction";
import AboutCover from "../assets/images/about.jpg";
import OurPromise from "../assets/images/our-promise.jpg";
import ourStory from "../assets/images/olw-our-story.jpg";
import ourCore from "../assets/images/our-core-belifs.png";
import whoWeAre from "../assets/images/olw-who-we-are.jpg";
import Preventive from "../assets/images/preventive.png";

const About = () => {
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

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

  const storyData = [
    {
      title: "Where We Began & Where We’re Headed",
      content: (
        <div>
          <p>
            We started with a simple belief: when people have clear, actionable guidance for their mind and body, they can lead healthier, happier, and more fulfilling lives. From the outset, our vision has been to empower individuals to take charge of their own well-being—physically, mentally, and emotionally.
          </p>
          <p>
            Driven by the desire to reach people wherever they are, we blend modern research with practical strategies, ensuring every insight and recommendation is fact-based and easy to apply in daily life. We aim to create a world where preventive care and holistic self-care aren’t luxuries but essential pillars of a vibrant, thriving community.
          </p>
        </div>
      ),
      imageAlt: "Our Journey Begins",
      imageUrl: ourStory,
    },
    {
      title: "Who We Are: Your Partners in Holistic Wellness",
      content: (
        <div>
          <p>
            We are a diverse team of medical professionals, wellness experts, researchers, and tech enthusiasts sharing one common goal: helping you live your best life—physically, mentally, and emotionally. Our belief is that prevention and proactive self-care are cornerstones of a truly fulfilling existence.
          </p>
          <p><strong>What Sets Us Apart:</strong></p>
          <ul>
            <li><strong>Holistic Approach:</strong> From mental health to fitness and nutrition, we consider the whole person.</li>
            <li><strong>Evidence-Based Guidance:</strong> Our recommendations stem from trustworthy data and peer-reviewed studies.</li>
            <li><strong>People Over Profit:</strong> We focus on empowering and educating rather than pushing products.</li>
            <li><strong>Empathy & Accessibility:</strong> We present information in plain language, making it accessible to individuals and families alike.</li>
          </ul>
        </div>
      ),
      imageAlt: "Who We Are",
      imageUrl: whoWeAre,
    },
    {
      title: "Our Core Beliefs: Building a Sustainable Path to Wellness",
      content: (
        <div>
          <ul>
            <li><strong>Preventive Care:</strong> Address potential health concerns before they become overwhelming.</li>
            <li><strong>Informed Choices:</strong> Offer transparent, accurate information that respects your autonomy.</li>
            <li><strong>Sustainable Routines:</strong> Encourage small, consistent steps over short-lived, drastic changes.</li>
            <li><strong>Community Support:</strong> Cultivate a space where everyone can learn, share, and grow together.</li>
          </ul>
        </div>
      ),
      imageAlt: "Core Beliefs",
      imageUrl: ourCore,
    },
    {
      title: "Meet the Minds: Experts, Enthusiasts & Innovators",
      content: (
        <div>
          <p>
            We are a passionate collective of health and fitness experts, enthusiasts, and innovators from diverse backgrounds. Our team includes healthcare professionals, fitness enthusiasts, and those with firsthand patient experience—offering a unique blend of expertise and empathy in everything we do. 
          </p>
          <p>
            We’re also technology geeks who love using modern tools to simplify health management, as well as logistics specialists who ensure seamless support for all.
          </p>
          <p>
            By uniting science, compassion, and innovation, we aim to create meaningful, sustainable change—from prescribing personalized wellness plans to exploring the latest health tech and making everyday life more manageable. Together, we’re building a community that inspires and empowers individuals to take charge of their health and live life to its fullest.
          </p>
        </div>
      ),
      imageAlt: "Meet the Minds",
      imageUrl: Preventive,
    },
    {
      title: "Our Promise: Empowering You, Every Step of the Way",
      content: (
        <div>
          <p>
            Whether you’re seeking lifestyle tips, mental health support, or general health insights, our multidisciplinary team strives to provide science-backed, empathetic guidance. We illuminate a path where you’re in control of your wellness journey—one step at a time.
          </p>
          <p>
            <strong>“We’re more than a team—we’re your partners in navigating a healthier, happier life.”</strong>
          </p>
        </div>
      ),
      imageAlt: "Our Promise",
      imageUrl: OurPromise,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = gsap.utils.toArray(".osv-section");

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: ".osv-horizontal-scroll",
      pin: true,
      scrub: 1,
      end: () => `+=${sections.length * window.innerWidth}`,
      animation: gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      }),
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero heading="About" subHeading="One Life Wellness" fontSize="80px" />
      <div className="about-us-hero-image-container">
        <img
          src={AboutCover}
          alt="About Us Hero"
          className="about-us-hero-image"
        />
      </div>
      {/* implement it here the horizontal scroll  */}
      <div ref={containerRef} className="osv-main-container">
        <div className="osv-horizontal-scroll">
          <div className="osv-content">
            {storyData.map(({ title, content, imageAlt, imageUrl }, index) => (
              <section className="osv-section" key={index}>
                <div className="osv-section-content">
                  <div className="osv-section-image">
                    <img src={imageUrl} alt={imageAlt} className="osv-image" />
                  </div>
                  <div className="osv-section-text">
                    <h2>{title}</h2>
                    {content}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-100">

      </div>

      <CallToAction
        title="Ready to Grow With Us?"
        description="Take the next step in your wellness journey. Dive deeper into our specialized programs, browse our expert articles, or get personal guidance tailored to your needs."
        buttonText="Read Our Latest Insights"
        buttonLink="/signup"
      />
    </>
  );
};

export default About;
