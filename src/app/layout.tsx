import type { Metadata } from "next";
import { Lilita_One, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Poxtrea | Cafetería en Madrid",
  description:
    "Cafés, tostadas, smoothies, frappés y desayunos en Poxtrea, Madrid.",
  openGraph: {
    title: "Poxtrea | Cafetería en Madrid",
    description:
      "Cafés, tostadas, smoothies, frappés y desayunos en Poxtrea, Madrid.",
    locale: "es_ES",
    type: "website",
    siteName: "Poxtrea",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
