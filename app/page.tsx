import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-brown-900/60 z-10" />{" "}
        {/* Overlay */}
        {/* Using a placeholder image instead of video */}
        <img
          src="/api/placeholder/1920/1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/api/placeholder/40/40" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {[
              { title: "About us", href: "/about" },
              {
                title: "Services",
                items: [
                  {
                    title: "CAMO Services",
                    href: "/services/camo",
                    description:
                      "Continuing Airworthiness Management Organization services",
                  },
                  {
                    title: "Digital Solutions",
                    href: "/services/digital",
                    description: "Next-gen aviation digital solutions",
                  },
                ],
              },
              { title: "Products", href: "/products" },
              { title: "Team", href: "/team" },
              { title: "Clients", href: "/clients" },
              { title: "Contact", href: "/contact" },
            ].map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-white hover:text-gray-200">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-96 gap-3 p-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <a
                                href={subItem.href}
                                className="block p-3 hover:bg-gray-100 rounded-md"
                              >
                                <div className="text-sm font-medium">
                                  {subItem.title}
                                </div>
                                <p className="text-sm text-gray-600">
                                  {subItem.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className="text-white hover:text-gray-200"
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start px-8 mt-32">
        <h1 className="text-6xl font-bold text-white mb-4">
          Aviation made
          <br />
          <span className="text-white">Seamless</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Global Transition, Expert CAMO &
          <br />
          Next-Gen Digital solutions
        </p>
        <div className="flex gap-4">
          <button className="group relative px-6 py-3 bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Let&amp;s Talk
            </span>
            <div className="absolute inset-0 bg-brown-900 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
          <button className="group relative px-6 py-3 bg-transparent text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/30">
            <span className="relative z-10 transition-colors duration-300">
              Know our services
            </span>
            <div className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
