import React from "react";
import { ArrowUpRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/blog-thumb1.jpg",
      title:
        "Good afternoon. As we are due to meet next Tuesday afternoon, I thought it might be an idea to send over...",
    },
    {
      id: 2,
      image: "/blog-thumb2.jpg",
      title:
        "Good afternoon. As we are due to meet next Tuesday afternoon, I thought it might be an idea to send over...",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-12 h-[600px]">
          {/* Left Column - Featured Blog */}
          <div className="col-span-7 relative h-full">
            <div className="absolute top-0 right-0 h-full w-[calc(100%+((100vw-1280px)/2))] -left-[calc((100vw-1280px)/2)]">
              <img
                src="/aero-inside.jpg"
                alt="Aircraft cockpit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-[calc((100vw-1280px)/2)] py-8 text-white">
                <h2 className="font-normal mb-4">
                  5 tips to digitalize your aircraft documents
                </h2>
                <p className="text-sm">Read full article at Aerotalks.com</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-5 h-full flex flex-col">
            {/* Blog Posts Preview - Exactly half height */}
            <div className="h-1/2">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative h-1/2 flex items-center pl-16"
                >
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-2 border-white bg-white overflow-hidden ring-4 ring-white">
                      <img
                        src={post.image}
                        alt="Blog thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-gray-900">{post.title}</p>
                    <button className="text-sm text-purple-600 mt-1">
                      read more
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AeroTalks Section - Exactly half height */}
            <div className="relative h-1/2">
              <div className="absolute inset-0 right-[calc(-1*(100vw-1280px)/2)] bg-purple-600 text-white p-8">
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">AeroTalks</h3>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <p className="text-lg mt-2">Read latest blogs & news</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
