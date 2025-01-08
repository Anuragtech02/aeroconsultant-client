import { StrapiImage } from "./strapi";

export interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
}

export interface TeamResponse {
  data: TeamMember[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface TeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
}
