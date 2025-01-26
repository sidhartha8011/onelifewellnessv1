import React from "react";
import SEO from "../components/SEO";
import OLWHero from "../components/OLWHero";
import CallToAction from "../components/CallToAction";
import AboutCover from "../assets/images/about.jpeg";
import OurPromise from "../assets/images/our-promise.jpg";
import ourStory from "../assets/images/olw-our-story.jpg";
import ourCore from "../assets/images/our-core-belifs.png";
import whoWeAre from "../assets/images/olw-who-we-are.jpg";
import Preventive from "../assets/images/preventive.png";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
      <div className="olw-whoweare-herosection">
        <div className="olw-whoweare-herocontent">
          <h2>Where We Began & Where We’re Headed</h2>
          <p>
            We started with a simple belief: when people have clear, actionable
            guidance for their mind and body, they can lead healthier, happier,
            and more fulfilling lives. From the outset, our vision has been to
            empower individuals to take charge of their own
            well-being—physically, mentally, and emotionally.
          </p>
          <p>
            Driven by the desire to reach people wherever they are, we blend
            modern research with practical strategies, ensuring every insight
            and recommendation is fact-based and easy to apply in daily life. We
            aim to create a world where preventive care and holistic self-care
            aren’t luxuries but essential pillars of a vibrant, thriving
            community.
          </p>
          <button className="whoweare-button">Explore More</button>
        </div>
      </div>
      <div className="olw-whoweare-hero-image-container"></div>
      <div className="olw-whoweare-main-container">
        <div className="olw-whoweare-content">
          <section className="olw-whoweare-section">
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-section-layout">
                <div>
                  <h2>Who We Are: Your Partners in Holistic Wellness</h2>
                  <p>
                    We are a diverse team of medical professionals, wellness
                    experts, researchers, and tech enthusiasts sharing one
                    common goal: helping you live your best life—physically,
                    mentally, and emotionally. Our belief is that prevention and
                    proactive self-care are cornerstones of a truly fulfilling
                    existence.
                  </p>
                </div>

                <div>
                  <h3>What Sets Us Apart</h3>
                  <ul className="olw-whoweare-whatsset-section">
                    <li>
                      <h5>Holistic Approach:</h5> From mental health to fitness
                      and nutrition, we consider the whole person.
                    </li>
                    <li>
                      <h5>Evidence-Based Guidance:</h5> Our recommendations stem
                      from trustworthy data and peer-reviewed studies.
                    </li>
                    <li>
                      <h5>People Over Profit:</h5> We focus on empowering and
                      educating rather than pushing products.
                    </li>
                    <li>
                      <h5>Empathy & Accessibility:</h5> We present information
                      in plain language, making it accessible to individuals and
                      families alike.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="olw-whoweare-section">
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-our-core-layout">
                <h2>
                  Our Core Beliefs: Building a Sustainable Path to Wellness
                </h2>
                <div className="olw-whoweare-core-section">
                  <ul className="olw-whoweare-core-layout">
                    <li>
                      <h4>Preventive Care</h4> Address potential health concerns
                      before they become overwhelming.
                    </li>
                    <li>
                      <h4>Informed Choices</h4> Offer transparent, accurate
                      information that respects your autonomy.
                    </li>
                  </ul>
                  <ul className="olw-whoweare-core-layout">
                    <li>
                      <h4>Sustainable Routines</h4> Encourage small, consistent
                      steps over short-lived, drastic changes.
                    </li>
                    <li>
                      <h4>Community Support</h4> Cultivate a space where
                      everyone can learn, share, and grow together.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="olw-whoweare-section">
            <div className="olw-whoweare-section-content">
              <div className="olw-whoweare-meet-minds-layout">
                <h2>Meet the Minds: Experts, Enthusiasts & Innovators</h2>
                <ul className="olw-whoweare-meet-minds-points">
                  <li>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={ourCore}
                    />
                    <div className="olw-whoweare-meet-minds-iner-layout">
                      <h4>Preventive Care</h4>
                      We focus on proactive health management, offering
                      personalized wellness plans to prevent chronic conditions
                      and promote long-term health.
                    </div>
                  </li>
                  <li>
                    <div className="olw-whoweare-meet-minds-iner-layout">
                      <h4>Informed Choices</h4>
                      We empower individuals with the latest research and tech
                      tools, helping them make educated decisions for their
                      health and wellness.
                    </div>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={ourCore}
                    />
                  </li>
                  <li>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={ourCore}
                    />
                    <div className="olw-whoweare-meet-minds-iner-layout">
                      <h4> Sustainable Routines</h4>
                      Our team supports individuals in creating long-lasting,
                      adaptable habits that fit their unique lifestyle and
                      wellness goals.
                    </div>
                  </li>
                  <li>
                    <div className="olw-whoweare-meet-minds-iner-layout">
                      Community Support: We foster a supportive environment
                      where individuals can connect, share experiences, and stay
                      motivated on their health journey.
                    </div>
                    <img
                      className="olw-whoweare-meet-minds-image"
                      src={ourCore}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="olw-whoweare-section-last">
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
                <blockquote className="home-page-quotes">
                  <FaQuoteLeft className="quote-icon" /> We’re more than a
                  team—we’re your partners in navigating a healthier, happier
                  life. <FaQuoteRight className="quote-icon" />
                </blockquote>
              </div>
              <div className="olw-whoweare-section-image">
                <img
                  src=""
                  alt="Our Promise"
                  className="olw-whoweare-our-promise-image"
                />
              </div>
            </div>
          </section>
        </div>
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

export default WhoWeAre;
