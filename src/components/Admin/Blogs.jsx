import { AlertCircle, Edit, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteInProgress, setDeleteInProgress] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const data = await listBlogs();
      setBlogs(data);
      setError(null);
    } catch (err) {
      setError(err.message || "An error occurred while fetching blogs.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to handle blog deletion
  const handleDeleteBlog = async (id) => {
    // Confirm deletion with the user
    if (
      !window.confirm(
        "Are you sure you want to delete this blog post? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      setDeleteInProgress(id);
      setError(null);

      await deleteBlog(id);

      // Remove blog from state
      setBlogs(blogs.filter((blog) => blog.id !== id));
      setSuccessMessage("Blog post deleted successfully");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (err) {
      setError(err.message || "Failed to delete blog post");
    } finally {
      setDeleteInProgress(null);
    }
  };

  // Function to truncate text for preview
  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  // Format date to readable string
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="container !mx-auto !p-6">
      <div className="flex justify-between items-center !mb-6">
        <h1 className="!text-2xl font-semibold !text-gray-800">
          Blog Management
        </h1>

        <Link
          to="/admin--dashboard/blogs/add"
          className="bg-black text-white !px-4 !py-2 rounded hover:bg-black 
                   transition-colors duration-200 flex items-center gap-2 shadow-sm"
        >
          <Edit size={16} />
          Create New Blog
        </Link>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="!mb-6 bg-green-50 border border-green-200 text-green-700 !px-4 !py-3 rounded flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{successMessage}</span>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="!mb-6 bg-red-50 border border-red-200 text-red-700 !px-4 !py-3 rounded flex items-center gap-2">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center !py-20">
          <Loader2 size={36} className="animate-spin text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = "true";
                        target.src = "/api/placeholder/400/320";
                      }
                    }}
                  />

                  <div className="absolute top-2 right-2">
                    {blog.visible ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium !px-2.5 !py-0.5 rounded-full flex items-center gap-1">
                        <Eye size={12} />
                        Published
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium !px-2.5 !py-0.5 rounded-full flex items-center gap-1">
                        <EyeOff size={12} />
                        Draft
                      </span>
                    )}
                  </div>
                </div>

                <div className="!p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h2>
                  <div className="text-sm text-gray-500 !mb-3">
                    {truncateContent(blog.content.replace(/<[^>]*>/g, ""))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 !mt-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(blog.created_at)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>
                        {blog.author?.name || `User ID: ${blog.userId}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100">
                  <div className="flex divide-x divide-gray-100">
                    <Link
                      to={`/admin--dashboard/blogs/edit/${blog.id}`}
                      className="flex-1 text-center !py-2 text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      disabled={deleteInProgress === blog.id}
                      className="flex-1 text-center !py-2 text-red-600 hover:bg-red-50 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-1"
                    >
                      {deleteInProgress === blog.id ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Trash2 size={14} />
                      )}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 bg-white rounded-lg shadow !p-8 text-center">
              <div className="text-gray-500 !mb-4">No blogs found</div>
              <p className="text-sm text-gray-400">
                Create your first blog post to get started
              </p>
              <Link
                to="/admin--dashboard/blogs/add"
                className="!mt-4 inline-block bg-black text-white !px-4 !py-2 rounded hover:bg-black 
                        transition-colors duration-200"
              >
                Create Blog Post
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Blogs;
