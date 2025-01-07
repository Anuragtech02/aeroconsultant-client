"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Logo, Menu as MenuType } from "@/types/common";

const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL as string;

interface HeaderProps {
  logo: Logo;
  menu: MenuType;
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
              className={cn(
                "w-auto h-10 object-contain",
                isScrolled ? "invert" : ""
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation and Login */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
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

            <Link href={loginUrl} target="_blank" rel="noopener noreferrer">
              <Button title="Login" variant="primary" className="text-black">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "md:hidden p-2 rounded-full transition-colors",
                  isScrolled || !isHomePage
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] p-0 bg-gray-900 border-gray-800 [&>button]:text-white [&>button:hover]:text-gray-200"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-800">
                  <Link href="/" className="block mb-6">
                    <Image
                      src={logo.data.attributes.url}
                      alt={logo.data.attributes.alt}
                      width={logo.data.attributes.width}
                      height={logo.data.attributes.height}
                      className="w-auto h-8 object-contain"
                      priority
                    />
                  </Link>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {menu.data.attributes.items.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={item.title}>
                          {item.items ? (
                            <>
                              <AccordionTrigger className="text-base py-4 text-gray-100 hover:text-white">
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="pl-4 pb-4">
                                  {item.items.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="block py-3 text-gray-300 hover:text-white transition-colors"
                                    >
                                      <div className="font-medium mb-1">
                                        {subItem.title}
                                      </div>
                                      <p className="text-sm text-gray-400">
                                        {subItem.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </AccordionContent>
                            </>
                          ) : (
                            <Link
                              href={item.href || "#"}
                              className={cn(
                                "flex items-center py-4 text-base transition-colors",
                                pathname === item.href
                                  ? "text-white font-medium"
                                  : "text-gray-300 hover:text-white"
                              )}
                            >
                              {item.title}
                            </Link>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </nav>
                </div>
                {/* Mobile Login Button */}
                <div className="mt-auto p-6 border-t border-gray-800">
                  <Link
                    href={loginUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button title="Login" variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
