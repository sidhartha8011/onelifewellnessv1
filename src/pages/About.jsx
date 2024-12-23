import React from 'react'
import SEO from '../components/SEO'
import YouTube from 'react-youtube';
import OLWHero from '../components/OLWHero';


const About = () => {

  const videoId = 'W6JxnP48Yg0'; // The video ID extracted from the URL

    const opts = {
        playerVars: {
            autoplay: 1, // Enable auto-play
        },
    };

    const onReady = (event) => {
      // You can pause the video on ready or perform other actions
      event.target.pauseVideo();
  };

  const seoData = {
    title: "About Us",
    description: "Learn more about One Life Wellness, our mission, and our team. Discover how we aim to promote health and mindfulness.",
    keywords: "about us, one life wellness, health, mindfulness",
    ogImage: "https://onelifwellness.com/images/about-og-image.jpg",
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
      <div className='about-description-container'>
        <h2 className='about-description'>
        Lorem ipsum dolor sit amet consectetur.
        Vel velit egestas tortor orci elit nibh tempus.
        </h2>
      </div>
      <div className='about-video-container'>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} className='about-video' />
      </div>
    </>
  )
}

export default About