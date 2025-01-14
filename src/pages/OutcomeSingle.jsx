import React from "react";
import { useParams, useLocation } from "react-router-dom";
import OLWHero from "../components/OLWHero";

import peaceImage from '../assets/images/peace.jpg';
import productivityImage from '../assets/images/productivity.jpg';
import prosperityImage from '../assets/images/prosperity.jpg';

const OutcomeSingle = () => {
  const { title } = useParams(); // Fetch the URL-friendly title parameter
  const location = useLocation(); // Fetch the state passed from the navigation

  // If the state is available, use it; otherwise, find the outcome from the title in the URL
  const outcome = location.state ? location.state.outcome : null;

  // If the state is not passed, we try to find the outcome using the title
  const outcomes = [
      {
        id: 1,
        title: 'PEACE',
        image: peaceImage,
        heading: 'Peace: Anchoring Yourself Amid Life’s Currents',
        paragraph: "Peace isn’t about escaping life’s complexities; it’s about discovering a steady center you can return to, no matter the external challenges. By learning to observe your thoughts, honor your emotions, and nurture self-compassion, you create an internal refuge of stability. This sense of calm allows you to respond—rather than react—to life’s ups and downs.",
        waysToHeading: "Ways to Nurture Peace",
        waysTo: [
          "Mindful Pauses: Take brief moments throughout the day to breathe slowly and ground yourself.",
          "Gentle Self-Reflection: Notice where stress resides in your body and explore journaling or quiet contemplation to release it.",
          "Kind Boundaries: Learn to say 'no' when needed, preserving your emotional energy for what truly matters."
        ],
        quote: "In the stillness of a peaceful mind, every breath becomes a gentle reminder of our own resilience."
      },
      {
        id: 2,
        title: 'PRODUCTIVITY',
        image: productivityImage,
        heading: 'Productivity: Transforming Knowledge into Meaningful Action',
        paragraph: "Productivity isn’t just about crossing items off a list; it’s about channeling your energy in ways that serve your deepest values. When you clarify your priorities and use small, deliberate steps, you prevent burnout and stay aligned with what genuinely enriches your life. By weaving together intention, routine, and personal growth, productivity becomes an affirming process rather than a draining one.",
        waysToHeading: "Ways to Channel Productivity",
        waysTo: [
          "Purposeful Planning: Identify your top goals each morning and focus on achieving them with care, rather than racing against the clock.",
          "Gentle Structure: Incorporate short breaks and movement to maintain steady energy, preventing fatigue.",
          "Self-Check-Ins: Regularly assess how your tasks align with your core values and adjust if you feel off track."
        ],
        quote: "Productivity flourishes when every task reflects the greater purpose guiding our day-to-day efforts."
      },
      {
        id: 3,
        title: 'PROSPERITY',
        image: prosperityImage,
        heading: 'Prosperity: Inviting Abundance from the Inside Out',
        paragraph: "Prosperity goes beyond material gain. It’s a holistic feeling of gratitude, connection, and inner wealth that enhances every facet of life. By pairing a calm mindset (Peace) with purposeful effort (Productivity), you lay the groundwork for long-lasting, meaningful abundance—one that embraces supportive relationships, personal growth, and the freedom to follow your aspirations.",
        waysToHeading: "Ways to Foster Prosperity",
        waysTo: [
          "Cultivate Gratitude: Recognize the small gifts in each day—acts of kindness, moments of joy, simple comforts.",
          "Share & Connect: Engage with others through supportive communities or mutual learning, enriching your sense of purpose.",
          "Celebrate Milestones: Acknowledge personal achievements—even minor ones—to spark ongoing motivation and confidence."
        ],
        quote: "Prosperity blossoms when the heart brims with gratitude, and each choice honors the abundance that life can offer."
      }
    ];

  // If the outcome wasn't passed via state, find it from the outcomes array
  const selectedOutcome =
    outcome ||
    outcomes.find(
      (outcome) => outcome.title.toLowerCase().replace(/\s+/g, "-") === title
    );

  if (!selectedOutcome) {
    return (
      <div>Outcome not found. Please navigate from the OutcomeAll page.</div>
    );
  }

  return (
    <div className="outcome-single-container flex-col align-center bottom-100">
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading={`Outcome - ${selectedOutcome.title}`}
          fontSize="70px"
        />
      </div>

      <div className="outcome-overall-container">
        <div key={selectedOutcome.id} className="outcome-container-box">
          <img
            src={selectedOutcome.image}
            alt={selectedOutcome.title}
            className="outcome-post-thumbnail"
          />
          <div className="outcome-heading-container">
            <h1 className="outcome-heading-text">{selectedOutcome.title}</h1>
          </div>
        </div>
        <div className="outcome-explaination-container">
          <h1>{selectedOutcome.heading}</h1>
          <p className="outcome-single-description">
            {selectedOutcome.paragraph}
          </p>

          {/* Render the "Ways To" heading */}

          <div>
            <h2>{selectedOutcome.waysToHeading}</h2>

            {/* Render the "Ways To" list */}
            <ul className="outcome-list">
              {selectedOutcome.waysTo.map((way, index) => (
                <li key={index}>{way}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="outcome-quote-container">
          <h2 className="outcome-quote">"{selectedOutcome.quote}"</h2>
        </div>
      </div>
    </div>
  );
};

export default OutcomeSingle;
