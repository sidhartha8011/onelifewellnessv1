import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  seoData = {},
}) => {
  // Default values for common properties
  const defaultValues = {
    title: "Home",
    description: "Welcome to One Life Wellness, where we focus on health, wellness, and mindfulness. Explore our journey to a better life.",
    keywords: "wellness, health, mindfulness, fitness, one life wellness",
    author: "One Life Wellness",
    ogType: "website",
    ogUrl: "https://onelifwellness.com",
    ogImage: "https://onelifwellness.com/images/default-og-image.jpg",
    ogTitle: "One Life Wellness - Your Path to Health and Wellness",
    ogDescription: "Join us on a journey to health and mindfulness with One Life Wellness.",
    twitterCard: "summary_large_image",
    twitterSite: "@OneLifeWellness",
    twitterCreator: "@OneLifeWellness",
    canonicalUrl: "https://onelifwellness.com",
  };

  // Merge default values with provided seoData
  const {
    title,
    description,
    keywords,
    author,
    ogType,
    ogUrl,
    ogImage,
    ogTitle,
    ogDescription,
    twitterCard,
    twitterSite,
    twitterCreator,
    canonicalUrl,
  } = { ...defaultValues, ...seoData };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title} | One Life Wellness</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph (OG) for Social Media */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Viewport for Mobile Responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </Helmet>
  );
};

export default SEO;
