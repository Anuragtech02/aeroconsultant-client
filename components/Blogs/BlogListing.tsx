import React from "react";
import { Button } from "../Button";
import { getBlogsList } from "@/lib/services";

const BlogListingPage = async () => {
  const { data: blogs } = await getBlogsList();

  // Helper function to get featured blog (first blog)
  const getFeaturedBlog = () => blogs[0];

  // Helper function to get grid blogs (next 3 blogs)
  const getGridBlogs = () => blogs.slice(1, 4);

  // Helper function to get large blog (5th and 6th blogs)
  const getLargeBlog = () => blogs[4];

  // Helper function to get remaining blogs (after 6th blog)
  const getRemainingBlogs = () => blogs.slice(6);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/blogs-banner.jpg"
            alt="Airplane wing in sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-white px-4">
          <h1 className="font-bold mb-4">Consulting on the Go!</h1>
          <p className="text-xl max-w-[400px]">
            Aeroblogs, industry leading airspace blogs to keep you upto date.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Blog Post */}
        {blogs.length > 0 && (
          <div className="mb-12">
            <div className="bg-indigo-900 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    {getFeaturedBlog().title}
                  </h2>
                  <p className="mb-4">{getFeaturedBlog().shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span>{formatDate(getFeaturedBlog().createdAt)}</span>
                    <a
                      href={`/blogs/${getFeaturedBlog().slug}`}
                      className="text-white hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="h-64 md:h-full">
                  <img
                    src={
                      getFeaturedBlog().highlightImage?.url ||
                      "/aero-background-blog.png"
                    }
                    alt={getFeaturedBlog().title}
                    className="w-full h-full max-h-[250px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {blogs.length > 1 && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {getGridBlogs().map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={post.highlightImage?.url || "/api/placeholder/400/300"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.description.replace(/<[^>]*>/g, "").slice(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                      {formatDate(post.createdAt)}
                    </span>
                    <a
                      href={`/blogs/${post.slug}`}
                      className="text-indigo-600 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Large Blog Post */}
        {blogs.length > 4 && getLargeBlog() && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">
                {getLargeBlog().title}
              </h2>
              <p className="text-gray-600 mb-4">
                {getLargeBlog()
                  .description.replace(/<[^>]*>/g, "")
                  .slice(0, 200)}
                ...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">
                  {formatDate(getLargeBlog().createdAt)}
                </span>
                <a
                  href={`/blogs/${getLargeBlog().slug}`}
                  className="text-indigo-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={
                  getLargeBlog().highlightImage?.url ||
                  "/api/placeholder/800/600"
                }
                alt={getLargeBlog().title}
                className="w-full h-full max-h-[250px] object-cover"
              />
            </div>
          </div>
        )}

        {/* Remaining Blogs in Vertical List */}
        {getRemainingBlogs().length > 0 && (
          <div className="space-y-6 mb-12">
            {getRemainingBlogs().map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4">
                    <img
                      src={
                        blog.highlightImage?.url || "/api/placeholder/400/300"
                      }
                      alt={blog.title}
                      className="w-full h-40 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {blog.description.replace(/<[^>]*>/g, "").slice(0, 200)}
                      ...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">
                        {formatDate(blog.createdAt)}
                      </span>
                      <a
                        href={`/blogs/${blog.slug}`}
                        className="text-indigo-600 hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* See More Button */}
        {blogs.length > 6 && (
          <div className="text-center">
            <Button
              title="See More"
              variant="primary"
              className="!bg-aero-primary [&>span]:!text-white"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogListingPage;
