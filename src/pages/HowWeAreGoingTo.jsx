import React from 'react';
import { useNavigate } from 'react-router-dom';
import OlwBackgroundTwo from '../components/OlwBackgroundTwo';
import OLWHero from '../components/OLWHero';

const HowWeAreGoingTo = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 1",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
      buttonText: "Learn More",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 2",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
      buttonText: "Learn More",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 3",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
      buttonText: "Learn More",
    },
    {
      id: 4,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 4",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
      buttonText: "Learn More",
    },
  ];

  const handleLearnMore = (post) => {
    const urlFriendlyTitle = post.title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/pages/how-we-are-going-to-achieve-it/${urlFriendlyTitle}`, {
      state: { post },
    });
  };

  return (
    <div className="bottom-100 flex-col align-center">
      <OlwBackgroundTwo className="olw-background-variant-two" />
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading="How we are going to Achieve it?"
          fontSize="70px"
        />
        <p className="hwgt-title-paragraph">
          Lorem ipsum dolor sit amet consectetur. Vel velit egestas tortor orci elit nibh tempus.
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
            <p>{post.description}</p>
            <button
              className="hwgt-post-button"
              onClick={() => handleLearnMore(post)}
            >
              {post.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeAreGoingTo;
