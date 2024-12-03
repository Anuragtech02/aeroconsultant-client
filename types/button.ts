// types/button.ts
import { ButtonHTMLAttributes } from "react";

export type IconPosition = "left" | "right";
export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  link?: string;
  icon?: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
        alt: string;
      };
    };
  } | null;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}
