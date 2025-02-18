import { StrapiImage } from "./strapi";

export interface BlogListing {
  id: number;
  documentId: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  highlightImage: StrapiImage;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogListingResponse {
  data: BlogListing[];
}
