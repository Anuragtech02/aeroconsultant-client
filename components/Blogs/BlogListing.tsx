import React from "react";
import { Button } from "../Button";

const BlogListing = () => {
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
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
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
        <div className="mb-12">
          <div className="bg-indigo-900 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Airworthiness Directives
                </h2>
                <p className="mb-4">
                  You lease an aircraft, paying $450,000 a month, and everything
                  is running smoothly. However, a future airworthiness directive
                  (AD) becomes...
                </p>
                <div className="flex items-center justify-between">
                  <span>May 20th 2020</span>
                  <button className="text-white hover:underline">
                    Read more
                  </button>
                </div>
              </div>
              <div className="h-64 md:h-full">
                <img
                  src="/aero-background-blog.png"
                  alt="Commercial aircraft"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "AerOPS Case Study",
              image: "/api/placeholder/400/300",
              date: "May 20th 2020",
            },
            {
              title: "AeroBOX Case Study",
              image: "/api/placeholder/400/300",
              date: "May 20th 2020",
            },
            {
              title: "AI meets Aviation",
              image: "/api/placeholder/400/300",
              date: "May 20th 2020",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{post.date}</span>
                  <button className="text-indigo-600 hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Large Blog Post */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              What is Lorem Ipsum?
            </h2>
            <p className="text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution...
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">May 20</span>
              <button className="text-indigo-600 hover:underline">
                Read more
              </button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/800/600"
              alt="Aircraft with fireworks"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Button
            title="See More"
            variant="primary"
            className="!bg-aero-primary [&>span]:!text-white"
          ></Button>
        </div>
      </div>
    </main>
  );
};

export default BlogListing;
