import BlogListing from "@/components/Blogs/BlogListing";
import { getBlogsList } from "@/lib/services";

// Enable ISR with 1 hour revalidation (3600 seconds)
export const revalidate = 3600;

// This allows the page to be statically generated but revalidated
export const dynamic = "force-static";

export default async function BlogsPage() {
  try {
    // Fetch blogs data at the page level with caching
    const { data: blogs } = await getBlogsList();

    return (
      <>
        <BlogListing blogs={blogs} />
      </>
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);

    // Fallback UI in case of error
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load blogs</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
}
