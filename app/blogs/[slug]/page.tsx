import BlogDetail from "@/components/Blogs/BlogDetail";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetails: React.FC<any> = ({ params }) => {
  return <BlogDetail params={params} />;
};

export default BlogDetails;
