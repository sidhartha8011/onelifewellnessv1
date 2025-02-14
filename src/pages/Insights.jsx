import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";
import { MdManageSearch } from "react-icons/md";
import blogPosts from "../data/blogPosts";

const Insights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Sort posts by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Search filtering
  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to create URL-friendly slug
  const createSlug = (title) => title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const handleReadMore = (title) => {
    navigate(`/insights/${createSlug(title)}`);
  };

  return (
    <div className="olw-insights-container">
      <div className="olw-insights-heading">
        <h1>
          <LinearGradient gradient={["to left", "#AADB71 ,#053090"]} fallbackColor="black">
            <span className="font-weight-bold">One Life Wellness Insights</span>
          </LinearGradient>
        </h1>
        <p>Discover the power of one's body, mind, and spirit to make a difference in your life.</p>
      </div>

      {/* Featured Insights */}
      <div className="olw-insights-featuerd">
        <div className="olw-insights-featuerd-inner-layout">
          <h3>Featuerd Insights.</h3>
          {sortedPosts.length > 0 && (
            <div className="olw-Featuerd-insight-post-container">
              <img src={sortedPosts[0].image} alt="blog-featured" className="olw-featuerd-insight-image" />
              <span>{sortedPosts[0].date}</span>
              <h3>{sortedPosts[0].title}</h3>
              <p>{sortedPosts[0].description}</p>
              <button className="olw-featuered-insight-button" onClick={() => handleReadMore(sortedPosts[0].title)}>
                Continue Reading
              </button>
            </div>
          )}
        </div>

        {/* Popular Insights */}
        <div className="olw-insights-featuerd-inner-layout">
          <h3>Polular Insights.</h3>
          <div className="olw-popular-insights-container">
            {sortedPosts.slice(1, 4).map(post => (
              <div key={post.id} className="olw-popular-insights-list">
                <div className="olw-popular-tags">
                  <span className="olw-popular-categories">{post.category}</span> <span>{post.date}</span>
                </div>
                <div className="olw-popular-insights-contents">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <button className="olw-featuered-insight-button" onClick={() => handleReadMore(post.title)}>
                    Continue Reading
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search & All Posts */}
      <div className="olw-insights-all-posts-layout">
        <div className="olw-all-post-search-layout">
          <h3>All Insights.</h3>
          <div className="olw-insights-search-box-layout">
            <input
              type="text"
              className="olw-insights-all-search-input"
              placeholder="Search for Insights"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="olw-insights-all-search-btn">
              <MdManageSearch />
            </button>
          </div>
        </div>

        {/* Display All Posts */}
        <div className="olw-insights-all-post-container">
          {filteredPosts.map(post => (
            <div key={post.id} className="olw-all-insights-list">
              <div className="olw-all-post-tags">
                <span className="olw-popular-categories">{post.category}</span> <span>{post.date}</span>
              </div>
              <img src={post.image} alt="insights-thumbnail" className="olw-all-insights-thumbnail-image" />
              <div className="olw-popular-insights-contents">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button className="olw-featuered-insight-button" onClick={() => handleReadMore(post.title)}>
                  Continue Reading
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
