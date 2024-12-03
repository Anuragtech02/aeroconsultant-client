// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${proximaNova.variable} ${helveticaNow.variable} ${montserrat.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
