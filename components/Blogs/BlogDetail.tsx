import { getBlogBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const BlogDetail = async ({ params }: Props) => {
  // Fetch blog data using the slug
  const blog = await getBlogBySlug(params.slug);

  // Handle case where blog is not found
  if (!blog) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="container mt-20">
        <div className="relative w-full h-64 md:h-96">
          <img
            src={blog.highlightImage?.url || "/api/placeholder/1200/600"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-indigo-900/30" />
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold">{blog.title}</h1>

        {/* Date and metadata */}
        <div className="mb-6 mt-8">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-gray-400">
              Published on {formatDate(blog.publishedAt)}
            </span>
            {blog.updatedAt !== blog.publishedAt && (
              <span className="text-gray-400">
                (Updated: {formatDate(blog.updatedAt)})
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: blog.description }}
            className="space-y-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 
                       [&_p]:text-gray-700 [&_p]:leading-relaxed 
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6
                       [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6
                       [&_img]:rounded-lg [&_img]:my-8"
          />
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
