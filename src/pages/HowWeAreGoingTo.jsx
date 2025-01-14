import React from 'react';
import { useNavigate } from 'react-router-dom';
import OlwBackgroundTwo from '../components/OlwBackgroundTwo';
import OLWHero from '../components/OLWHero';
import support from '../assets/images/Support.jpg'
import progress from '../assets/images/Progress.jpg'
import actionable from '../assets/images/Actionable.jpg'
import assesment from '../assets/images/Assessments.jpg'
import awarness from '../assets/images/Awareness.jpg'

const HowWeAreGoingTo = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      thumbnail: awarness,
      title: "Awareness & Education",
      description:
        "We start by simplifying complex health concepts so you can make informed decisions about your body and mind. Through easy-to-read articles, infographics, and expert-led discussions, we help you understand the importance of preventive care over reactive treatment, how small, consistent actions can ward off bigger health challenges, and ways to spot early signs and symptoms to seek proactive solutions.",
      buttonText: "Learn More",
      keyBenefit:
        "By educating yourself first, you’re already taking a huge step toward lifelong wellness.",
      bulletPoints: [
        "The importance of preventive care over reactive treatment.",
        "How small, consistent actions can ward off bigger health challenges.",
        "Ways to spot early signs and symptoms, so you can seek solutions proactively."
      ]
    },
    {
      id: 2,
      thumbnail: assesment,
      title: "Personalized Assessments",
      description:
        "No two individuals are exactly alike. That’s why we encourage you to reflect on your unique lifestyle, genetics, and personal goals. Our resources—from self-evaluation checklists to specialized health tips—help you pinpoint areas of improvement. This ensures any adjustments you make align with your specific needs, whether it's weight management, mental well-being, or chronic disease prevention.",
      buttonText: "Learn More",
      keyBenefit: "Customizing your journey makes sustainable results far more achievable.",
      bulletPoints: [
        "Reflect on your unique lifestyle, genetics, and personal goals.",
        "Use self-evaluation checklists and specialized health tips.",
        "Pinpoint areas of improvement to customize your wellness journey."
      ]
    },
    {
      id: 3,
      thumbnail: actionable,
      title: "Actionable Routines & Tools",
      description:
        "Knowledge is only powerful when it leads to action. We provide step-by-step guides and curated wellness routines that blend seamlessly into your daily life. Expect practical, easy-to-adopt strategies such as nutritional insights for balanced meals, lifestyle hacks to boost productivity and manage stress, and fitness guidelines for all levels.",
      buttonText: "Learn More",
      keyBenefit: "Turn insights into habits without overhauling your entire life.",
      bulletPoints: [
        "Nutritional insights for balanced meals and mindful eating.",
        "Lifestyle hacks to boost productivity and manage stress.",
        "Fitness guidelines for all levels, from beginner to advanced."
      ]
    },
    {
      id: 4,
      thumbnail: support,
      title: "Continuous Support & Motivation",
      description:
        "True transformation isn’t an overnight endeavor—it’s a journey. We aim to keep you motivated by offering regular updates with fresh, research-backed articles, encouraging tips on stress management, sleep optimization, and opportunities to connect with others on similar paths, fostering a sense of shared growth.",
      buttonText: "Learn More",
      keyBenefit:
        "You’ll never feel alone as you navigate life’s health challenges and triumphs.",
      bulletPoints: [
        "Regular updates with fresh, research-backed articles.",
        "Encouraging tips on stress management, sleep optimization, and more.",
        "Opportunities to connect with others on similar wellness journeys."
      ]
    },
    {
      id: 5,
      thumbnail: progress,
      title: "Measurable Progress & Adaptation",
      description:
        "As you grow and evolve, so do your health needs. We encourage you to track your improvements through self-assessments, journaling, or professional check-ins. By reviewing what’s working and what isn’t, you can refine your approach to stay aligned with your evolving goals and circumstances.",
      buttonText: "Learn More",
      keyBenefit: "Tracking progress ensures you continue moving forward in the right direction.",
      bulletPoints: [
        "Track your improvements through self-assessments or journaling.",
        "Review what's working and adjust accordingly.",
        "Refine your approach to stay aligned with your evolving goals."
      ]
    }
  ];

  const handleLearnMore = (post) => {
    const urlFriendlyTitle = post.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/how-we-work/${urlFriendlyTitle}`, {
      state: { post },
    });
  };

  return (
    <div className="bottom-100 flex-col align-center">
      <OlwBackgroundTwo className="olw-background-variant-two" />
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading="A Roadmap to Holistic Wellness"
          fontSize="70px"
        />
        <p className="hwgt-title-paragraph">
          At One Life Wellness, we believe that well-being isn’t just about avoiding illness—it’s about actively creating a life that fosters peace of mind, productive habits, and prosperity in every aspect. Our approach weaves together modern research, practical insights, and personalized strategies to help you build a lasting foundation for optimal health.
        </p>
      </div>
      <div className="hwgt-overview-section">
        {posts.map((post) => (
          <div key={post.id} className="hwgt-overview-post-card">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="hwgt-post-thumbnail"
            />
            <h3>{post.title}</h3>
            <p className="hwgt-post-description">{post.description}</p>
            <button
              className="hwgt-post-button"
              onClick={() => handleLearnMore(post)}
            >
              {post.buttonText}
            </button>
          </div>
        ))}
      </div>
      <div>
      <div className="why-approach-works-section">
  <div className="why-approach-works-container">
    <h2 className="why-approach-heading">Why Our Approach Works</h2>
    <ul className="why-approach-list">
      <li>
        <strong>Holistic:</strong> We address mental, physical, and emotional wellness, ensuring you benefit from a well-rounded strategy.
      </li>
      <li>
        <strong>Empowering:</strong> Instead of imposing complex plans, we provide simple, personalized tools you can adopt at your own pace.
      </li>
      <li>
        <strong>Flexible:</strong> Life changes, and so should your wellness plan. Our resources grow with you, adapting to new challenges and goals.
      </li>
      <li>
        <strong>Community-Focused:</strong> We believe shared experiences bring deeper understanding and empathy, making your journey more meaningful.
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default HowWeAreGoingTo;
