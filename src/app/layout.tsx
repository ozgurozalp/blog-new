import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import AppHeader from "@/components/shared/AppHeader";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özgür ÖZALP's Blog",
  description: "A blog about software development and other stuff",
  openGraph: {
    title: "Özgür ÖZALP's Blog",
    description: "A blog about software development and other stuff",
  },
  twitter: {
    title: "Özgür ÖZALP's Blog",
    description: "A blog about software development and other stuff",
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "apple-mobile-web-app-status-bar-style": "#f4f4f4",
    "msapplication-navbutton-color": "#f4f4f4",
    "msapplication-TileColor": "#f4f4f4",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#f4f4f4" },
    { media: "(prefers-color-scheme: light)", color: "#f4f4f4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
