import React from "react";
import { useNavigate } from "react-router-dom";
import OLWHero from "../components/OLWHero";
import peaceImage from "../assets/images/peace.jpg";
import productivityImage from "../assets/images/productivity.jpg";
import prosperityImage from "../assets/images/prosperity.jpg";

const OutcomeAll = () => {
  const navigate = useNavigate();

  // Array of outcomes
  const outcomes = [
    {
      id: 1,
      title: "PEACE",
      image: peaceImage,
      heading: "Peace: Anchoring Yourself Amid Life’s Currents",
      paragraph:
        "Peace isn’t about escaping life’s complexities; it’s about discovering a steady center you can return to, no matter the external challenges. By learning to observe your thoughts, honor your emotions, and nurture self-compassion, you create an internal refuge of stability. This sense of calm allows you to respond—rather than react—to life’s ups and downs.",
      waysToHeading: "Ways to Nurture Peace",
      waysTo: [
        "Mindful Pauses: Take brief moments throughout the day to breathe slowly and ground yourself.",
        "Gentle Self-Reflection: Notice where stress resides in your body and explore journaling or quiet contemplation to release it.",
        "Kind Boundaries: Learn to say 'no' when needed, preserving your emotional energy for what truly matters.",
      ],
      quote:
        "In the stillness of a peaceful mind, every breath becomes a gentle reminder of our own resilience.",
    },
    {
      id: 2,
      title: "PRODUCTIVITY",
      image: productivityImage,
      heading: "Productivity: Transforming Knowledge into Meaningful Action",
      paragraph:
        "Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values. When you clarify your priorities and use small, deliberate steps, you prevent burnout and stay aligned with what genuinely enriches your life. By weaving together intention, routine, and personal growth, productivity becomes an affirming process rather than a draining one.",
      waysToHeading: "Ways to Channel Productivity",
      waysTo: [
        "Purposeful Planning: Identify your top goals each morning and focus on achieving them with care, rather than racing against the clock.",
        "Gentle Structure: Incorporate short breaks and movement to maintain steady energy, preventing fatigue.",
        "Self-Check-Ins: Regularly assess how your tasks align with your core values and adjust if you feel off track.",
      ],
      quote:
        "Productivity flourishes when every task reflects the greater purpose guiding our day-to-day efforts.",
    },
    {
      id: 3,
      title: "PROSPERITY",
      image: prosperityImage,
      heading: "Prosperity: Inviting Abundance from the Inside Out",
      paragraph:
        "Prosperity goes beyond material gain. It’s a holistic feeling of gratitude, connection, and inner wealth that enhances every facet of life. By pairing a calm mindset (Peace) with purposeful effort (Productivity), you lay the groundwork for long-lasting, meaningful abundance—one that embraces supportive relationships, personal growth, and the freedom to follow your aspirations.",
      waysToHeading: "Ways to Foster Prosperity",
      waysTo: [
        "Cultivate Gratitude: Recognize the small gifts in each day—acts of kindness, moments of joy, simple comforts.",
        "Share & Connect: Engage with others through supportive communities or mutual learning, enriching your sense of purpose.",
        "Celebrate Milestones: Acknowledge personal achievements—even minor ones—to spark ongoing motivation and confidence.",
      ],
      quote:
        "Prosperity blossoms when the heart brims with gratitude, and each choice honors the abundance that life can offer.",
    },
  ];

  // Handle outcome click to navigate to the detailed view
  const handleOutcomeClick = (outcome) => {
    const urlFriendlyTitle = outcome.title.toLowerCase().replace(/\s+/g, "-"); // Converts the title to a URL-friendly format
    navigate(`/why-it-matters/${urlFriendlyTitle}`, {
      state: { outcome }, // Pass the entire outcome data as state
    });
  };

  return (
    <div className="flex-col align-center bottom-100">
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading="A Journey Towards Peace,"
          subHeading="Productivity & Prosperity"
          fontSize="70px"
        />
        <p className="outcome-title-paragraph">
          Life can sometimes feel like a balancing act—juggling
          responsibilities, nurturing relationships, and striving for personal
          growth all at once. At <b>One Life Wellness,</b> we believe that
          authentic well-being isn’t just about avoiding stress or checking off
          tasks; it’s about consciously <b>shaping your life</b> so that inner
          tranquility, meaningful accomplishments, and a sense of fulfillment
          naturally align.
          <br />
          <br />
          Through our holistic approach, we guide you toward tangible results
          that reflect three core pillars: <b>Peace, Productivity,</b> and{" "}
          <b>Prosperity</b>. Each pillar is integral to a life brimming with
          purpose, connection, and growth. When these elements come together,
          you gain more than just a healthier body or a clearer mind—you
          discover a <b>life-affirming transformation</b> that enriches every
          aspect of your journey.
        </p>
      </div>
      <div className="outcome-overall-container">
        {outcomes.map((outcome) => (
          <div
            key={outcome.id}
            className="outcome-container-box"
            onClick={() => handleOutcomeClick(outcome)} // Trigger navigation on click
            style={{ cursor: "pointer" }} // Optional: Add a pointer cursor for better UX
          >
            <img
              src={outcome.image}
              alt={outcome.title}
              className="outcome-post-thumbnail"
            />
            <div className="outcome-heading-container">
              <h1 className="outcome-heading-text">{outcome.title}</h1>
            </div>
          </div>
        ))}

        <div className="exploring-further">
          <section className="explore-further-section">
            <div className="explore-further-content">
              <h2 className="explore-further-heading">Explore Further</h2>
              <p className="explore-further-text">
                We encourage you to discover more through our articles,
                discussions, and community insights, each designed to expand
                your understanding of these pillars. Wherever you are on your
                journey, know that new perspectives and gentle shifts can create
                a ripple effect of positive change in your day-to-day life.
              </p>
              <div className="cta-container">
                <p className="cta-text">
                  Stay Informed – Sign up for updates to receive reflective
                  prompts and research highlights that keep you motivated.
                </p>
                <button className="cta-button">Sign Up Now</button>
              </div>
              <blockquote className="explore-further-quote">
                “True transformation begins when knowledge meets the heart’s
                readiness to embrace calm, purpose, and the quiet bounty of
                life.”
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OutcomeAll;
