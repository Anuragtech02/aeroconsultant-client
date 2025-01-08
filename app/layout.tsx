// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { ButtonVariant, IconPosition } from "@/types/button";

// Proxima Nova for headings
const proximaNova = localFont({
  src: [
    {
      path: "./fonts/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ProximaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
});

// Helvetica Now for body text
const helveticaNow = localFont({
  src: [
    {
      path: "./fonts/HelveticaNow-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNow-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

// Montserrat for buttons (from Google Fonts)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Aviation Solutions",
  description: "Global Transition, Expert CAMO & Next-Gen Digital solutions",
};

const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL;
// Sample common data structure matching Strapi
const commonData = {
  data: {
    attributes: {
      logoSmall: {
        data: {
          attributes: {
            url: "/logo-small.png",
            width: 40,
            height: 40,
            alt: "Aviation Solutions Small Logo",
          },
        },
      },
      logoLarge: {
        data: {
          attributes: {
            url: "/logo-large.png",
            width: 120,
            height: 40,
            alt: "Aviation Solutions Large Logo",
          },
        },
      },
      headerLogoType: "small",
      headerMenu: {
        data: {
          attributes: {
            items: [
              { title: "About us", href: "/#about" },
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
              { title: "Team", href: "/#team" },
              { title: "Clients", href: "/#clients" },
              { title: "Contact", href: contactUrl },
            ],
          },
        },
      },
      footerLogoType: "large",
      footerDescription:
        "AeroConsultant is a global leader in aviation consulting, providing expert solutions in aircraft transition services, CAMO support, and innovative digital tools. With a presence in 155 countries and a commitment to excellence, we help aviation operators streamline operations and ensure compliance. ",
      footerHeading: "Get in Touch",
      footerMenu: {
        data: {
          attributes: {
            items: [
              { title: "About Us", href: "/#about" },
              { title: "Services", href: "/services" },
              { title: "Products", href: "/products" },
              { title: "Contact", href: contactUrl },
            ],
          },
        },
      },
      contactList: [
        {
          title: "Email",
          link: "mailto:info@aviationsolutions.com",
          icon: {
            data: {
              attributes: {
                url: "/api/placeholder/24/24",
                width: 24,
                height: 24,
                alt: "Email Icon",
              },
            },
          },
          iconPosition: "left" as IconPosition,
          variant: "text" as ButtonVariant,
        },
        {
          title: "+1 234 567 890",
          link: "tel:+1234567890",
          icon: {
            data: {
              attributes: {
                url: "/api/placeholder/24/24",
                width: 24,
                height: 24,
                alt: "Phone Icon",
              },
            },
          },
          iconPosition: "left" as IconPosition,
          variant: "text" as ButtonVariant,
        },
      ],
      socialLinks: [
        {
          title: "LinkedIn",
          link: "https://linkedin.com",
          icon: {
            data: {
              attributes: {
                url: "/LinkedInCircle.svg",
                width: 24,
                height: 24,
                alt: "LinkedIn Icon",
              },
            },
          },
          iconPosition: "left" as IconPosition,
          variant: "text" as ButtonVariant,
        },
        // {
        //   title: "Twitter",
        //   link: "https://twitter.com",
        //   icon: {
        //     data: {
        //       attributes: {
        //         url: "/api/placeholder/24/24",
        //         width: 24,
        //         height: 24,
        //         alt: "Twitter Icon",
        //       },
        //     },
        //   },
        //   iconPosition: "left" as IconPosition,
        //   variant: "text" as ButtonVariant,
        // },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aeroconsultant | Aviation made seamless</title>
        <meta
          name="description"
          content="Global Transition, Expert CAMO & Next-Gen Digital solutions"
        />
        <link rel="icon" href="/logo-small.png" />
      </head>
      <body
        className={`${proximaNova.variable} ${helveticaNow.variable} ${montserrat.variable} font-body antialiased`}
      >
        <Header
          logo={
            commonData.data.attributes.headerLogoType === "small"
              ? commonData.data.attributes.logoSmall
              : commonData.data.attributes.logoLarge
          }
          menu={commonData.data.attributes.headerMenu}
        />
        <main>{children}</main>
        <Footer
          logo={
            commonData.data.attributes.footerLogoType === "small"
              ? commonData.data.attributes.logoSmall
              : commonData.data.attributes.logoLarge
          }
          description={commonData.data.attributes.footerDescription}
          heading={commonData.data.attributes.footerHeading}
          menu={commonData.data.attributes.footerMenu}
          contactList={commonData.data.attributes.contactList}
          socialLinks={commonData.data.attributes.socialLinks}
        />
      </body>
    </html>
  );
}
