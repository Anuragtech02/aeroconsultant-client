import BlogDetail from "@/components/Blogs/BlogDetail";
import { getBlogBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import React from "react";

// Enable ISR with 1 hour revalidation (3600 seconds)
export const revalidate = 3600;

// This allows the page to be statically generated but revalidated
export const dynamic = "force-static";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

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

const BlogDetails: React.FC<Props> = async ({ params }) => {
  try {
    // Await params since it's a Promise in Next.js 15
    const resolvedParams = await params;

    // Fetch blog data at the page level with caching
    const blog = await getBlogBySlug(resolvedParams.slug);

    // Handle case where blog is not found
    if (!blog) {
      notFound();
    }

    return <BlogDetail blog={blog} />;
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
};

export default BlogDetails;
