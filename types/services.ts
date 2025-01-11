import { StrapiImage } from "./strapi";
import { TeamMember, TeamSectionProps } from "./team";

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

export interface TeamMembersResponse {
  data: TeamSectionProps["members"];
}
