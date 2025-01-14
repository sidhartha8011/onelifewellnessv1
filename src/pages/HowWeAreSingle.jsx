import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import OlwBackgroundTwo from '../components/OlwBackgroundTwo';
import OLWHero from '../components/OLWHero';

const HowWeAreSingle = () => {
  const { title } = useParams(); // Fetch the URL parameter
  const location = useLocation(); // Fetch the state passed from navigation
  const post = location.state ? location.state.post : null; // Contains the full post object

  // If state is not passed, find the post based on the URL-friendly title
  const posts = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 1",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 2",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 3",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
    },
    {
      id: 4,
      thumbnail: "https://via.placeholder.com/150",
      title: "Lorem Ipsum dolor 4",
      description: "Lorem ipsum dolor sit amet consectetur. Pulvinar in vitae id placerat.",
    },
  ];

  // If no state is passed, find the post using the title in the URL
  const selectedPost = post || posts.find(
    (post) => post.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  if (!selectedPost) {
    return <div>Post not found. Please navigate from the HowWeAreGoingTo page.</div>;
  }

  return (
    <div className='bottom-100 flex-col align-center'>
      <OlwBackgroundTwo className="olw-background-variant-two" />
      <div className="olw-hwgt-title-section">
        <OLWHero
          heading=""
          subHeading={selectedPost.title}
        />
      </div>

      <div className='hwgt-single-post-content'>
  <img src={selectedPost.thumbnail} alt={selectedPost.title} className='hwgt-post-image' />
  
  <div className='hwgt-single-post-details-container'>
    <h3>{selectedPost.title}</h3>
    
    <p>{selectedPost.description}</p>
    
    <h4>Key Benefits:</h4>
    <p>{selectedPost.keyBenefit}</p>
    
    <h4>Highlights:</h4>
    <ul className="hwgt-bullet-points-list">
      {selectedPost.bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    
  </div>
</div>
    </div>
  );
};

export default HowWeAreSingle;
