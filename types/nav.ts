// types/nav.ts
export interface SubNavItem {
  title: string;
  href: string;
  description: string;
}

export interface NavItem {
  title: string;
  href?: string;
  items?: SubNavItem[];
}

export interface NavigationProps {
  items?: NavItem[];
}
