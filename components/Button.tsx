import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { ButtonProps } from "@/types/button";

const buttonVariants = ({
  variant = "primary",
  size = "default",
  fullWidth,
  className = "",
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  fullWidth?: boolean;
  className?: string;
}) => {
  const baseClasses = [
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "overflow-hidden",
    "transition-all",
    "duration-300",
    "hover:scale-105",
    "hover:shadow-lg",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    fullWidth && "w-full",
  ];

  const sizeClasses = {
    default: ["h-12", "px-8", "py-3", "min-w-[160px]"],
    sm: ["h-9", "px-4", "min-w-[120px]"],
    lg: ["h-14", "px-10", "min-w-[180px]"],
    icon: ["h-10", "w-10", "p-0", "min-w-[40px]"],
  };

  const variantClasses = {
    primary: ["bg-white", "[&>span]:text-gray-900"],
    outline: [
      "bg-transparent",
      "border",
      "border-white/30",
      "[&>span]:text-white",
    ],
    secondary: [
      "bg-secondary",
      "text-secondary-foreground",
      "hover:bg-secondary/80",
    ],
    text: [
      "bg-transparent",
      "text-gray-600",
      "underline-offset-4",
      "hover:underline",
    ],
  };

  return [
    ...baseClasses,
    ...(sizeClasses[size] || sizeClasses.default),
    ...(variantClasses[variant] || variantClasses.primary),
    className,
  ]
    .filter(Boolean)
    .join(" ");
};

const ButtonContent = ({
  title,
  icon,
  iconPosition,
  isLoading,
  variant,
}: Pick<
  ButtonProps,
  "title" | "icon" | "iconPosition" | "isLoading" | "variant"
>) => {
  if (isLoading) {
    return (
      <>
        <Loader2 className="relative z-10 mr-2 h-4 w-4 animate-spin" />
        <span className="relative z-10 text-white">Please wait</span>
      </>
    );
  }

  return (
    <>
      {icon && iconPosition === "left" && (
        <Image
          src={icon.data.attributes.url}
          alt={icon.data.attributes.alt}
          width={24}
          height={24}
          className="relative z-10 mr-3 h-5 w-5"
        />
      )}
      <span
        className={`relative z-10 transition-colors duration-300 ${
          variant === "primary"
            ? "text-gray-900 group-hover:text-white"
            : "text-white"
        }`}
      >
        {title}
      </span>
      {icon && iconPosition === "right" && (
        <Image
          src={icon.data.attributes.url}
          alt={icon.data.attributes.alt}
          width={24}
          height={24}
          className="relative z-10 ml-3 h-5 w-5"
        />
      )}
      <div
        className={`absolute inset-0 transform transition-transform duration-300 ${
          variant === "primary"
            ? "bg-gray-900 translate-y-full group-hover:translate-y-0"
            : variant === "outline"
            ? "bg-white/10 -translate-x-full group-hover:translate-x-0"
            : ""
        }`}
      />
    </>
  );
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      title,
      link,
      icon,
      iconPosition = "left",
      fullWidth,
      isLoading,
      ...props
    },
    ref
  ) => {
    const baseButtonClasses = buttonVariants({
      variant,
      size,
      fullWidth,
      className,
    });

    if (link) {
      return (
        <Link href={link} passHref>
          <button className={baseButtonClasses} ref={ref} {...props}>
            <ButtonContent
              title={title}
              icon={icon}
              iconPosition={iconPosition}
              isLoading={isLoading}
              variant={variant}
            />
          </button>
        </Link>
      );
    }

    return (
      <button className={baseButtonClasses} ref={ref} {...props}>
        <ButtonContent
          title={title}
          icon={icon}
          iconPosition={iconPosition}
          isLoading={isLoading}
          variant={variant}
        />
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
