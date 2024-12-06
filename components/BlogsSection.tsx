import React from "react";
import ArrowExternalIcon from "@/app/icons/ArrowExternalIcon";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "plane-img.jpg",
      title:
        "Good afternoon. As we are due to meet next Tuesday afternoon, I thought it might be an idea to send over...",
    },
    {
      id: 2,
      image: "plane-img.jpg",
      title:
        "Good afternoon. As we are due to meet next Tuesday afternoon, I thought it might be an idea to send over...",
    },
  ];

  return (
    <section className="w-full border-y border-black/30">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-12 h-[700px]">
          {/* Left Column - Featured Blog */}
          <div className="col-span-7 relative h-full">
            <div className="absolute top-0 right-0 h-full w-[calc(100%+var(--max-layout-ml))] -left-[var(--max-layout-ml)]">
              <img
                src="/aero-inside.jpg"
                alt="Aircraft cockpit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-[var(--max-layout-ml)] pl-4 xl:pl-6 py-8 text-white">
                <h2 className="font-normal mb-4">
                  5 tips to digitalize your aircraft documents
                </h2>
                <a
                  className="text-sm underline"
                  href="https://aerotalks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full article at Aerotalks.com
                </a>
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
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-20">
                    <div className="absolute inset-0 rounded-full border-2 border-white bg-white overflow-hidden ring-2 ring-white">
                      <img
                        src={post.image}
                        alt="Blog thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-gray-900">{post.title}</p>
                    <button className="text-sm mt-1 underline">
                      read more
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AeroTalks Section - Exactly half height */}
            <div className="relative h-1/2">
              <div className="absolute inset-0 w-[calc(100%+var(--max-layout-ml))] pr-[var(--max-layout-ml)] bg-purple-600 text-white p-8 flex justify-between items-end">
                <div>
                  <span className="font-bold block text-6xl font-proxima">
                    AeroTalks
                  </span>
                  <p className="text-lg mt-2">Read latest blogs & news</p>
                </div>
                <ArrowExternalIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
