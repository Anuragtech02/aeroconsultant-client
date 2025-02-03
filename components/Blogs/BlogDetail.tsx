import React from "react";

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  content: string;
  highlightImage: string;
}

interface BlogDetailProps {
  post: BlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mt-20">
        <div className="relative w-full h-64 md:h-96">
          <img
            src={post.highlightImage}
            alt="Aircraft hero image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/30" />
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold">{post.title}</h1>
        {/* Author and Date */}
        <div className="mb-6 mt-8">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-medium">Written by {post.author}</span>
            <span className="text-gray-400">{post.date}</span>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4"
          />
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
