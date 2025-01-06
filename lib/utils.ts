import { StrapiCommonResponse } from "@/types/strapi";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Transform Functions
export function transformCommonDataToLayoutProps(data: StrapiCommonResponse) {
  const { data: commonData } = data;

  return {
    header: {
      logo: {
        data: {
          attributes: {
            url:
              commonData.headerLogoType === "small"
                ? commonData.logoSmall.url
                : commonData.logoLarge.url,
            width:
              commonData.headerLogoType === "small"
                ? commonData.logoSmall.width
                : commonData.logoLarge.width,
            height:
              commonData.headerLogoType === "small"
                ? commonData.logoSmall.height
                : commonData.logoLarge.height,
            alt:
              commonData.headerLogoType === "small"
                ? commonData.logoSmall.name
                : commonData.logoLarge.name,
          },
        },
      },
    },
    footer: {
      logo: {
        data: {
          attributes: {
            url:
              commonData.footerLogoType === "small"
                ? commonData.logoSmall.url
                : commonData.logoLarge.url,
            width:
              commonData.footerLogoType === "small"
                ? commonData.logoSmall.width
                : commonData.logoLarge.width,
            height:
              commonData.footerLogoType === "small"
                ? commonData.logoSmall.height
                : commonData.logoLarge.height,
            alt:
              commonData.footerLogoType === "small"
                ? commonData.logoSmall.name
                : commonData.logoLarge.name,
          },
        },
      },
      description: commonData.footerDescription,
      heading: commonData.footerHeading,
      contactList: commonData.contactList,
      socialLinks: commonData.socialLinks,
    },
  };
}
