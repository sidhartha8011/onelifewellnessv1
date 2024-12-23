import React from 'react'
import SEO from '../components/SEO';
import OLWHero from '../components/OLWHero';
import { BsInfoLg } from "react-icons/bs";


const WhatWeDo = () => {

  const seoData = {
    title: "What We Do",
    description: "Learn more about One Life Wellness, our mission, and our team. Discover how we aim to promote health and mindfulness.",
    keywords: "about us, one life wellness, health, mindfulness",
    ogImage: "https://onelifwellness.com/images/about-og-image.jpg",
    ogTitle: "About One Life Wellness - Our Mission",
    ogDescription: "Discover who we are and what drives One Life Wellness forward.",
  };

  return (
    <div className='olw-wwd-container'>
      <SEO seoData={seoData} />
      <OLWHero
        heading=""
        subHeading="What We Do"
        fontSize="80px" // Adjust font size dynamically if needed
      />
      <div className='olw-wwd-intro-container'> 
        <div className='olw-wwd-video-container'>
        <video controls className="WWD-videoPlayer" src="https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4" /> 
        </div>
        <div className='olw-wwd-intro'>
          <div className='olw-wwd-intro-top'>
            <button className='olw-wwd-light-blue-btn'>
              Lorem Ipsum
            </button>
            <div>
            <h2>Lorem ipsum dolor sit consectetur feugiat.</h2>
            <p>Lorem ipsum dolor sit consectetur feugiat. Pharetra pretium turpis luctus</p>
            
            </div>

          </div>

          <div className='olw-wwd-intro-bottom'>
            <div className='olw-wwd-bottom-top'>
              <div className='olw-wwd-icon-container'>
                <span className='olw-wwd-icon-box'><BsInfoLg className='olw-wwd-icon' /></span>
                <h4>Lorem ipsum dolor sit amt consecteur.</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc. </p>
              </div>
              <div className='olw-wwd-icon-container'>
                <span className='olw-wwd-icon-box'><BsInfoLg className='olw-wwd-icon' /></span>
                <h4>Lorem ipsum dolor sit amt consecteur.</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc. </p>
              </div>
            </div>
            <button className='blue-button'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='olw-wwd-description-container'>
        <div>
          <h4>Lorem Ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc. </p>
        </div>
        <div>
          <h4>Lorem Ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc. </p>
        </div>
        <div>
          <h4>Lorem Ipsum dolor sit amet consectetur</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Feugiat fermentum a enim feugiat. Pharetra pretium turpis luctus scelerisque sed. Sem laoreet odio ipsum vestibulum tortor magna purus pharetra. Pulvinar vitae fermentum risus id risus nisi quis nunc. </p>
        </div>
      </div>

    </div>
  )
}

export default WhatWeDo
