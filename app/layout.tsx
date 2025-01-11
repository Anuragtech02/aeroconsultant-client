import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { getCommonData } from "@/lib/services";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const commonData = await getCommonData();

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
            commonData.data.headerLogoType === "small"
              ? commonData.data.logoSmall
              : commonData.data.logoLarge
          }
          menu={commonData.data.headerMenu}
        />
        <main>{children}</main>
        <Footer
          logo={
            commonData.data.footerLogoType === "small"
              ? commonData.data.logoSmall
              : commonData.data.logoLarge
          }
          description={commonData.data.footerDescription}
          heading={commonData.data.footerHeading}
          menu={commonData.data.footerMenu}
          contactList={commonData.data.contactList}
          socialLinks={commonData.data.socialLinks}
        />
      </body>
    </html>
  );
}
