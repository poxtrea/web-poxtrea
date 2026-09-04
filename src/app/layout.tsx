import type { Metadata } from "next";
import { Lilita_One, Poppins } from "next/font/google";
import "./globals.css";
import { siteAssets, seoContent, siteUrl } from "./data/site";

const displayFont = Lilita_One({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Poppins({
  variable: "--font-body",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoContent.title,
  description: seoContent.description,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    url: siteUrl,
    locale: "es_ES",
    type: "website",
    siteName: "Poxtrea",
    images: [
      {
        url: siteAssets.openGraph,
        width: 1200,
        height: 630,
        alt: seoContent.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.title,
    description: seoContent.description,
    images: [
      {
        url: siteAssets.openGraph,
        width: 1200,
        height: 630,
        alt: seoContent.socialImageAlt,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
