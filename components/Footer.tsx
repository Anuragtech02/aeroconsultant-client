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
    <footer className="bg-gray-100 py-16">
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
                  src={social.icon.url}
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
                          href={item.url || "#"}
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
                  {contactList.map((contact) => (
                    <div
                      key={contact.id}
                      className={`flex items-${
                        contact.title.includes("<br>") ? "start" : "center"
                      } space-x-3 text-gray-500`}
                    >
                      <div
                        className={`w-6 flex items-center justify-center ${
                          contact.title.includes("<br>") ? "mt-1" : ""
                        }`}
                      >
                        {contact.icon && (
                          <Image
                            src={contact.icon.url}
                            alt={contact.icon.name}
                            width={contact.icon.width}
                            height={contact.icon.height}
                            className="w-5 h-5"
                          />
                        )}
                      </div>
                      {contact.link.startsWith("mailto:") ? (
                        <div className="flex flex-col space-y-1">
                          {contact.title.split("<br>").map((email, index) => (
                            <Link
                              key={index}
                              href={`mailto:${email.trim()}`}
                              className="hover:text-gray-900 transition-colors"
                            >
                              {email.trim()}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div>
                          {contact.title.split("<br>").map((line, index) => (
                            <React.Fragment key={index}>
                              {line.trim()}
                              {index <
                                contact.title.split("<br>").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
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
