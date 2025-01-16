import React from 'react';
import SEO from '../components/SEO';
import OLWHero from '../components/OLWHero';

const About = () => {
  const seoData = {
    title: "About Us",
    description: "Learn more about One Life Wellness, our mission, and our team. Discover how we aim to promote health and mindfulness.",
    keywords: "about us, one life wellness, health, mindfulness",
    ogImage: "https://via.placeholder.com/1200x630", // Placeholder image
    ogTitle: "About One Life Wellness - Our Mission",
    ogDescription: "Discover who we are and what drives One Life Wellness forward.",
  };

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero
        heading="About"
        subHeading="One Life Wellness"
        fontSize="80px" // Adjust font size dynamically if needed
      />
      <div className='about-us-hero-image-container'>
        <img
          src="https://via.placeholder.com/1200x600" // Placeholder image
          alt="About Us Hero"
          className='about-us-hero-image fadeIn'
        />
      </div>
      <div className='about-us-content'>
        {/* Our Story & Vision */}
        <section className='about-us-section about-us-reverse-layout fadeInLeft'>
          <div className='about-us-section-image'>
            <img
              src="https://via.placeholder.com/600x400" // Placeholder image
              alt="Our Story & Vision"
              className='zoomIn vision-mission-image'
            />
          </div>
          <div className='about-us-vision-mission-content about-us-section-content'>
            <h2>Our Story & Vision</h2>
            <h3>Where We Began & Where We’re Headed</h3>
            <p>
              We started with a simple belief: when people have clear, actionable guidance for their mind and body, 
              they can lead healthier, happier, and more fulfilling lives. From the outset, our vision has been to 
              empower individuals to take charge of their own well-being—physically, mentally, and emotionally.
            </p>
            <p>
              Driven by the desire to reach people wherever they are, we blend modern research with practical strategies, 
              ensuring every insight and recommendation is fact-based and easy to apply in daily life.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className='about-us-section fadeInUp'>
          <div className='about-us-section-content'>
            <h2>Who We Are: Your Partners in Holistic Wellness</h2>
            <p>
              We are a diverse team of medical professionals, wellness experts, researchers, and tech enthusiasts sharing one 
              common goal: helping you live your best life—physically, mentally, and emotionally. Our belief is that prevention 
              and proactive self-care are cornerstones of a truly fulfilling existence.
            </p>
          </div>
          <div className='about-us-section-image'>
            <img
              src="https://via.placeholder.com/600x400" // Placeholder image
              alt="Who We Are"
              className='slideInUp  vision-mission-image'
            />
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className='about-us-section about-us-reverse-layout fadeInRight'>
          <div className='about-us-section-image'>
            <img
              src="https://via.placeholder.com/600x400" // Placeholder image
              alt="What Sets Us Apart"
              className='rotateIn  vision-mission-image'
            />
          </div>
          <div className='about-us-section-content'>
            <h2>What Sets Us Apart</h2>
            <ul>
              <li><strong>Holistic Approach:</strong> From mental health to fitness and nutrition, we consider the whole person.</li>
              <li><strong>Evidence-Based Guidance:</strong> Our recommendations stem from trustworthy data and peer-reviewed studies.</li>
              <li><strong>People Over Profit:</strong> We focus on empowering and educating rather than pushing products.</li>
              <li><strong>Empathy & Accessibility:</strong> We present information in plain language, making it accessible to individuals and families alike.</li>
            </ul>
          </div>
        </section>

        {/* Our Core Beliefs */}
        <section className='about-us-section fadeIn'>
          <div className='about-us-section-content'>
            <h2>Our Core Beliefs: Building a Sustainable Path to Wellness</h2>
            <ul>
              <li><strong>Preventive Care:</strong> Address potential health concerns before they become overwhelming.</li>
              <li><strong>Informed Choices:</strong> Offer transparent, accurate information that respects your autonomy.</li>
              <li><strong>Sustainable Routines:</strong> Encourage small, consistent steps over short-lived, drastic changes.</li>
              <li><strong>Community Support:</strong> Cultivate a space where everyone can learn, share, and grow together.</li>
            </ul>
          </div>
          <div className='about-us-section-image'>
            <img
              src="https://via.placeholder.com/600x400" // Placeholder image
              alt="Our Core Beliefs"
              className='bounceIn  vision-mission-image'
            />
          </div>
        </section>

        {/* Our Promise */}
        <section className='about-us-section about-us-reverse-layout fadeInUp'>
          <div className='about-us-section-image'>
            <img
              src="https://via.placeholder.com/600x400" // Placeholder image
              alt="Our Promise"
              className='zoomIn  vision-mission-image'
            />
          </div>
          <div className='about-us-section-content'>
            <h2>Our Promise: Empowering You, Every Step of the Way</h2>
            <p>
              Whether you’re seeking lifestyle tips, mental health support, or general health insights, our multidisciplinary 
              team strives to provide science-backed, empathetic guidance. We illuminate a path where you’re in control of your 
              wellness journey—one step at a time.
            </p>
            <blockquote>“We’re more than a team—we’re your partners in navigating a healthier, happier life.”</blockquote>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
