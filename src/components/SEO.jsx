import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ seoData = {} }) => {
  // Default values for common properties
  const defaultValues = {
    title: "One Life Wellness | A Mannual for Life",
    description:
      "Welcome to One Life Wellness, where we focus on health, wellness, and mindfulness. Explore our journey to a better life.",
    keywords: "wellness, health, mindfulness, fitness, one life wellness",
    author: "One Life Wellness",
    ogType: "website",
    ogUrl: "https://www.onelifewellness.info/",
    ogImage: "https://www.onelifewellness.info/images/default-og-image.jpg",
    ogTitle: "One Life Wellness - A Mannual for Life",
    ogDescription:
      "JExplore mindfulness techniques, self-improvement tips, and wisdom about life.",
    twitterCard: "summary_large_image",
    twitterSite: "@OneLifeWellness",
    twitterCreator: "@OneLifeWellness",
    canonicalUrl: "https://www.onelifewellness.info/",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "One Life Wellness",
    url: "https://onelifewellness.com",
    description:
      "One Life Wellness explores the essence of life, mindfulness, and well-being. Discover how to live a fulfilling life.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://onelifewellness.com",
    },
    publisher: {
      "@type": "Organization",
      name: "One Life Wellness",
      logo: {
        "@type": "ImageObject",
        url: "https://onelifewellness.com/logo.png",
        width: 250,
        height: 60,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://onelifewellness.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

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

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
