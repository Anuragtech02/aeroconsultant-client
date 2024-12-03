// types/common.ts

import { ButtonProps } from "./button";

export type LogoType = "small" | "large";

export interface MenuItem {
  title: string;
  href?: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export interface Menu {
  data: {
    attributes: {
      items: MenuItem[];
    };
  };
}

export interface Logo {
  data: {
    attributes: {
      url: string;
      width: number;
      height: number;
      alt: string;
    };
  };
}

export interface CommonData {
  data: {
    attributes: {
      logoSmall: Logo;
      logoLarge: Logo;
      headerLogoType: LogoType;
      headerMenu: Menu;
      footerLogoType: LogoType;
      footerDescription: string;
      footerHeading: string;
      footerMenu: Menu;
      contactList: ButtonProps[];
      socialLinks: ButtonProps[];
    };
  };
}
