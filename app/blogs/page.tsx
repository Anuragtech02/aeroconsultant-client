import BlogListing from "@/components/Blogs/BlogListing";
import { getBlogsList } from "@/lib/services";

// Fetch fresh data on every request
export const dynamic = "force-dynamic";

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
