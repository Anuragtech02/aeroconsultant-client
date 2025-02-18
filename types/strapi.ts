import { SliderTab } from "@/components/Home/SliderSection";
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
    logoSmall: StrapiImage;
    headerMenu: Menu;
    footerMenu: Menu;
    contactList: ContactLink[];
    socialLinks: ContactLink[];
  };
  meta: Record<string, unknown>;
}

export interface StrapiHomeResponse {
  data: {
    id: number;
    documentId: string;
    heroHeading: string;
    heroDescription: string;
    heroBGSlider: [
      {
        desktopImage: StrapiImage;
        mobileImage: StrapiImage;
      }
    ];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    heroCTAList: Array<{
      id: number;
      title: string;
      link: string;
      iconPosition: string | null;
      variant: "primary" | "outline";
    }>;
    statisticsCounters: Array<{
      id: number;
      title: string;
      countStart: number;
      countEnd: number;
      symbol: string;
      symbolPosition: "left" | "right";
    }>;
    sliderTabs: SliderTab[];
    aboutSectionHeading: string;
    aboutSectionDescription: string;
    aboutSectionImage: StrapiImage;
    clientsLogoList: Array<StrapiImage>;
    serviceSectionHeading: string;
    teamSectionDescription: string;
    sliderSectionTitle: string;
    clientsSectionHeading: string;
  };
  meta: Record<string, unknown>;
}

export interface IServicePageResponse {
  data: {
    clientsLogoList: StrapiImage[];
    clientsSectionHeading: string;
    slider: SliderTab[];
    camoServices: {
      title: string;
      subTitle: string;
      logoList: StrapiImage[];
      upperDescription: string;
      image: StrapiImage;
      benefitsList: string;
    };
    recordReview: {
      title: string;
      subTitle: string;
      highlightImage: StrapiImage;
      leftImage: StrapiImage;
      shortDescription: string;
      helpPoints: string;
    };
    recordDigitization: {
      title: string;
      highlightImage: StrapiImage;
      leftImage: StrapiImage;
      logoList: StrapiImage[];
      helpDescription: string;
      shortDescription: string;
    };
    aerobox: {
      title: string;
      subTitle: string;
      leftImage: StrapiImage;
      featurePoints: string;
    };
    aeroops: {
      title: string;
      subTitle: string;
      rightImage: StrapiImage;
      description: string;
    };
    aerooil: {
      title: string;
      subTitle: string;
      rightImage: StrapiImage;
      description: string;
    };
    engineStand: {
      title: string;
      subTitle: string;
      rightImage: StrapiImage;
      description: string;
    };
  };
}
