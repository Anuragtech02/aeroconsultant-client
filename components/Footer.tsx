import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { FooterMenu } from "@/types/common";
import { ContactLink, StrapiImage } from "@/types/strapi";

interface FooterProps {
  logo: StrapiImage;
  description: string;
  heading: string;
  menu: FooterMenu;
  contactList: ContactLink[];
  socialLinks: ContactLink[];
}

const Footer = ({
  logo,
  description,
  heading,
  menu,
  contactList,
  socialLinks,
}: FooterProps) => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Logo, Description, Social */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <Image
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto h-12 object-contain"
              />
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
              {description}
            </p>
            {/* Social Links */}
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                className="inline-block mr-4"
                aria-label={social.title}
              >
                <Image
                  src="/api/placeholder/24/24"
                  alt={`${social.title} Icon`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>

          {/* Right Column - Heading and Two-Column Layout */}
          <div>
            {/* Heading */}
            <h2 className="font-normal text-gray-900 mb-16">{heading}</h2>

            {/* Two-Column Layout for Menu and Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Navigation Menu */}
              <div>
                <nav>
                  <ul className="space-y-4">
                    {menu.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href || "#"}
                          className="text-gray-500 hover:text-gray-900 text-base transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-8">
                  Contact
                </h3>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="w-6 flex items-center justify-center">
                      <Image
                        src="/CallIcon.svg"
                        alt="Phone Icon"
                        width={24}
                        height={24}
                        className="w-5 h-5"
                      />
                    </div>
                    <span>(+33) 67836684</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 text-gray-500">
                    <div className="w-6 flex items-center justify-center mt-1">
                      <Image
                        src="/EmailIcon.svg"
                        alt="Email Icon"
                        width={24}
                        height={24}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Link
                        href="mailto:sales@aeroconsultant.fr"
                        className="hover:text-gray-900 transition-colors"
                      >
                        sales@aeroconsultant.fr
                      </Link>
                      <Link
                        href="mailto:consultant@aeroconsultant.fr"
                        className="hover:text-gray-900 transition-colors"
                      >
                        consultant@aeroconsultant.fr
                      </Link>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3 text-gray-500">
                    <div className="w-6 flex items-center justify-center mt-1">
                      <Image
                        src="/PinIcon.svg"
                        alt="Location Icon"
                        width={24}
                        height={24}
                        className="w-5 h-5"
                      />
                    </div>
                    <div>
                      16 Avenue Du Parc, 31700,
                      <br />
                      Blagnac, France
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
