import { ButtonProps } from "./button";

export interface HeroSection {
  title: string;
  subtitle: string;
  buttons: ButtonProps[];
  backgroundImage: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
        alt: string;
      };
    };
  };
}
