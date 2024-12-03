"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { Logo, Menu } from "@/types/common";

interface HeaderProps {
  logo: Logo;
  menu: Menu;
}

export function Header({ logo, menu }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : isHomePage
          ? "bg-transparent"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={logo.data.attributes.url}
              alt={logo.data.attributes.alt}
              width={logo.data.attributes.width}
              height={logo.data.attributes.height}
              className="w-auto h-10 object-contain"
              priority
            />
          </Link>

          {/* Main Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {menu.data.attributes.items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "text-base transition-all duration-200 bg-transparent h-auto rounded-full",
                          "px-4 py-2",
                          isScrolled || !isHomePage
                            ? "text-gray-900 hover:text-gray-900 hover:bg-gray-100"
                            : "text-white hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white shadow-lg rounded-md">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                                >
                                  <div className="text-base font-medium leading-none text-gray-900 mb-2">
                                    {subItem.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={cn(
                        "text-base transition-all duration-200 px-4 py-2 block rounded-full",
                        isScrolled || !isHomePage
                          ? "text-gray-900 hover:text-gray-900 hover:bg-gray-100"
                          : "text-white hover:text-white hover:bg-white/10",
                        pathname === item.href
                          ? isHomePage && !isScrolled
                            ? "text-white font-medium"
                            : "text-primary font-medium"
                          : ""
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* TODO: Add mobile menu */}
        </div>
      </div>
    </header>
  );
}

export default Header;
