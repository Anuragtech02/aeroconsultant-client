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
import { HeaderProps } from "@/types/common";

const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL as string;

export function Header({ logo, menu }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Wrapper component for Link that closes the menu
  const MenuLink = ({
    href,
    className,
    children,
    ...props
  }: {
    href: string;
    className: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={className}
      onClick={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm"
          : isHomePage
          ? "bg-white"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <MenuLink href="/" className="relative z-10">
            <Image
              src={logo.url}
              alt={logo.alternativeText || logo.name}
              width={logo.width}
              height={logo.height}
              className={cn(
                "w-auto h-10 object-contain invert",
                isScrolled ? "invert" : ""
              )}
              priority
            />
          </MenuLink>

          {/* Desktop Navigation and Login */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {menu.items.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.children?.length > 0 ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-base transition-all duration-200 bg-transparent h-auto rounded-full",
                            "px-4 py-2",
                            isScrolled || !isHomePage
                              ? "text-gray-900 hover:text-gray-900 hover:bg-gray-100"
                              : "text-grey-900 hover:text-grey-900 hover:bg-white/10"
                          )}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2 bg-white shadow-lg rounded-md">
                            {item.children.map((subItem) => (
                              <li key={subItem.id}>
                                <NavigationMenuLink asChild>
                                  <MenuLink
                                    href={subItem.url}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
                                  >
                                    <div className="text-base font-medium leading-none text-gray-900 mb-2">
                                      {subItem.title}
                                    </div>
                                  </MenuLink>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <MenuLink
                        href={item.url}
                        className={cn(
                          "text-base transition-all duration-200 px-4 py-2 block rounded-full",
                          isScrolled || !isHomePage
                            ? "text-gray-900 hover:text-gray-900 hover:bg-gray-100"
                            : "text-grey-900 hover:text-grey-900 hover:bg-white/10",
                          pathname === item.url
                            ? isHomePage && !isScrolled
                              ? "text-grey-900 font-medium"
                              : "text-primary font-medium"
                            : ""
                        )}
                      >
                        {item.title}
                      </MenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link href={loginUrl} target="_blank" rel="noopener noreferrer">
              <Button
                title="Login"
                variant="primary"
                className="w-full !bg-black [&>span]:text-white"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                title="Menu"
                className={cn(
                  "lg:hidden p-2 rounded-full transition-colors",
                  isScrolled || !isHomePage
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-grey-900 hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] p-0 bg-gray-900 border-gray-800 [&>button]:text-grey-900 [&>button:hover]:text-gray-200"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-800">
                  <MenuLink href="/" className="block mb-6">
                    <Image
                      src={logo.url}
                      alt={logo.alternativeText || logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="w-auto h-8 object-contain"
                      priority
                    />
                  </MenuLink>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {menu.items.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={item.id}>
                          {item.children?.length > 0 ? (
                            <>
                              <AccordionTrigger className="text-base py-4 text-gray-100 hover:text-grey-900">
                                {item.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="pl-4 pb-4">
                                  {item.children.map((subItem) => (
                                    <MenuLink
                                      key={subItem.id}
                                      href={subItem.url}
                                      className="block py-3 text-gray-300 hover:text-grey-900 transition-colors"
                                    >
                                      <div className="font-medium mb-1">
                                        {subItem.title}
                                      </div>
                                    </MenuLink>
                                  ))}
                                </div>
                              </AccordionContent>
                            </>
                          ) : (
                            <MenuLink
                              href={item.url}
                              className={cn(
                                "flex items-center py-4 text-base transition-colors",
                                pathname === item.url
                                  ? "text-grey-900 font-medium"
                                  : "text-gray-300 hover:text-grey-900"
                              )}
                            >
                              {item.title}
                            </MenuLink>
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
