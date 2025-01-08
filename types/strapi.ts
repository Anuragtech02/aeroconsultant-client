import { Menu } from "./common";

// src/types/image.ts
export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<
    string,
    {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      size: number;
      width: number;
      height: number;
      sizeInBytes: number;
    }
  >;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type LogoType = "small" | "large";

export interface ContactLink {
  id: number;
  title: string;
  link: string;
  icon: StrapiImage;
  iconPosition: "left" | "right" | null;
  variant: "primary" | "secondary" | "outline" | "text" | null;
}

export interface StrapiCommonResponse {
  data: {
    id: number;
    documentId: string;
    headerLogoType: "small" | "large";
    footerLogoType: "small" | "large";
    footerDescription: string;
    footerHeading: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logoLarge: StrapiImage;
    headerMenu: Menu;
    footerMenu: Menu;
    contactList: Array<{
      id: number;
      title: string;
      link: string;
      iconPosition: "left" | "right";
      variant: "text" | "primary" | "secondary" | "outline";
    }>;
  };
  meta: Record<string, unknown>;
}
