import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import OLWHero from '../components/OLWHero';
gsap.registerPlugin(ScrollTrigger);

const HowWeAreGoingTo = () => {
  const seoData = {
    title: "How We Are Going to Achieve Wellness",
    description: "Discover the integrated path to health and happiness at One Life Wellness. Our roadmap helps you achieve lasting well-being.",
    keywords: "wellness, holistic health, roadmap, wellness community",
    ogImage: "https://via.placeholder.com/1200x630",
    ogTitle: "How We Are Going to Achieve Wellness - Our Approach",
    ogDescription: "Explore our step-by-step approach to achieving holistic health and wellness.",
  };

  useEffect(() => {
    const sections = gsap.utils.toArray('.hwa-roadmap-section');

    // Horizontal scrolling setup
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll',
        pin: true,
        scrub: 1,
        end: () => `+=${sections.length * window.innerWidth}`,
      },
    });

    // Animation for content within each section
    sections.forEach((section) => {
      const elements = section.querySelectorAll('.hwa-fadeIn, .hwa-fadeInLeft, .hwa-fadeInRight');
      if (elements.length > 0) {
        gsap.from(elements, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
          },
        });
      }
    });
  }, []);

  return (
    <>
      <SEO seoData={seoData} />
      <OLWHero
        heading="A Roadmap to Holistic Wellness"
        fontSize="80px"
      />
      <div className="horizontal-scroll">
        <div className="hwa-how-we-are-going-to">
          {[
            {
              title: "1. Awareness & Education",
              content: (
                <>
                  <p>
                    We start by simplifying complex health concepts so you can make informed decisions about your body and mind. Through easy-to-read articles, infographics, and expert-led discussions, we help you understand:
                  </p>
                  <ul>
                    <li>The importance of preventive care over reactive treatment.</li>
                    <li>How small, consistent actions can ward off bigger health challenges.</li>
                    <li>Ways to spot early signs and symptoms, so you can seek solutions proactively.</li>
                  </ul>
                  <p><strong>Key Benefit:</strong> By educating yourself first, you’re already taking a huge step toward lifelong wellness.</p>
                </>
              ),
              imageAlt: "Awareness & Education",
            },
            {
              title: "2. Personalized Assessments",
              content: (
                <>
                  <p>
                    No two individuals are exactly alike. That’s why we encourage you to reflect on your unique lifestyle, genetics, and personal goals. Our resources—ranging from self-evaluation checklists to specialized health tips—help you pinpoint areas of improvement.
                  </p>
                  <p><strong>Key Benefit:</strong> Customizing your journey makes sustainable results far more achievable.</p>
                </>
              ),
              imageAlt: "Personalized Assessments",
            },
            {
              title: "3. Actionable Routines & Tools",
              content: (
                <>
                  <p>
                    Knowledge is only powerful when it leads to action. We provide step-by-step guides and curated wellness routines that blend seamlessly into your daily life.
                  </p>
                  <ul>
                    <li>Nutritional insights for balanced meals and mindful eating.</li>
                    <li>Lifestyle hacks that boost productivity and help manage stress.</li>
                    <li>Fitness guidelines ranging from beginner exercises to advanced training plans.</li>
                  </ul>
                  <p><strong>Key Benefit:</strong> Turn insights into habits without overhauling your entire life.</p>
                </>
              ),
              imageAlt: "Actionable Routines & Tools",
            },
            {
              title: "4. Continuous Support & Motivation",
              content: (
                <>
                  <p>
                    True transformation isn’t an overnight endeavor—it’s a journey. We aim to keep you motivated by offering:
                  </p>
                  <ul>
                    <li>Regular updates with fresh, research-backed articles and resources.</li>
                    <li>Encouraging tips on stress management, sleep optimization, and more.</li>
                    <li>Opportunities to connect with others on similar paths, fostering a sense of shared growth.</li>
                  </ul>
                  <p><strong>Key Benefit:</strong> You’ll never feel alone as you navigate life’s health challenges and triumphs.</p>
                </>
              ),
              imageAlt: "Continuous Support & Motivation",
            },
            {
              title: "5. Measurable Progress & Adaptation",
              content: (
                <>
                  <p>
                    As you grow and evolve, so do your health needs. We encourage you to track your improvements—whether through self-assessments, journaling, or professional check-ins.
                  </p>
                  <p><strong>Key Benefit:</strong> Keeping tabs on your progress ensures you continue moving forward in the right direction.</p>
                </>
              ),
              imageAlt: "Measurable Progress & Adaptation",
            },
          ].map(({ title, content, imageAlt }, index) => (
            <section className="hwa-roadmap-section" key={index}>
              <div className="hwa-section-content">
                <div className="hwa-section-image hwa-fadeInLeft">
                  <img src="https://via.placeholder.com/600x400" alt={imageAlt} />
                </div>
                <div className="hwa-section-text hwa-fadeInRight">
                  <h2 className="hwa-fadeIn">{title}</h2>
                  {content}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
      <section className="hwa-call-to-action">
        <h2 className="hwa-fadeIn">Take the Next Step</h2>
        <p className="hwa-fadeInUp">
          Ready to embrace a healthier, more intentional lifestyle? Join our wellness community today and start your journey!
        </p>
        <a href="/community" className="hwa-cta-button hwa-fadeInUp">
          Join Our Wellness Community →
        </a>
        <blockquote className="hwa-fadeInUp">
          “Empower your mind, energize your body, and enrich your spirit—one day at a time.”
        </blockquote>
      </section>
    </>
  );
};

export default HowWeAreGoingTo;
