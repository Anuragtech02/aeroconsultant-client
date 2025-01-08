import { StrapiImage } from "./strapi";

export interface TableOfContentItem {
  id: number;
  title: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  shortDescription: string;
  htmlDescription: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: StrapiImage;
  slug: string;
  highlightImage: StrapiImage;
  tableOfContent: TableOfContentItem[];
}

export interface ServiceResponse {
  data: Service[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ServicesSectionProps {
  className?: string;
  heading: string; // Contains HTML
  description: string;
  services: Service[];
}
