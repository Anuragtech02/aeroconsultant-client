import { StrapiImage } from "./strapi";

export interface MenuItem {
  id: string;
  url: string;
  title: string;
  target: string;
  children: unknown[];
  isProtected: boolean;
  collapsed?: boolean;
}

export interface Menu {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  items: MenuItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

interface HeaderMenu {
  id: number;
  items: MenuItem[];
}

// Props type for the Header component
export interface HeaderProps {
  logo: StrapiImage;
  menu: HeaderMenu;
}

export interface FooterMenu {
  id: number;
  items: MenuItem[];
}

export interface ContactLink {
  id: number;
  title: string;
  link: string;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "outline" | "text";
}
