import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

const BlogPost = () => {
  const { title } = useParams();

  // Convert the URL slug back to a readable title
  const formattedTitle = title.replace(/-/g, " ").toLowerCase();

  // Find the post that matches the formatted title
  const post = blogPosts.find(post => 
    post.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  // If post not found, show a default message instead of 404
  if (!post) {
    return (
      <div className="blog-post-container">
        <h2>Blog post not found</h2>
        <p>It seems the blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p><strong>Category:</strong> {post.category} | <strong>Date:</strong> {post.date}</p>
      <img src={post.image} alt={post.title} className="insights-post-image" />
      <p>{post.description}</p>
    </div>
  );
};

export default BlogPost;
