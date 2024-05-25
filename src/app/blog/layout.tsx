import AppHeader from "@/components/shared/AppHeader";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Özgür ÖZALP",
  authors: {
    name: "Özgür ÖZALP",
    url: "https://linkedin.com/in/ozgurozalp",
  },
  keywords: [
    "Özgür ÖZALP",
    "Özgür",
    "ÖZALP",
    "ozgurozalp",
    "ozqurozalp",
    "ozgur ozalp",
    "ozgur",
    "ozalp",
    "ozqurozalp.com",
    "ozgurozalp.com",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Developer",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  creator: "Özgür ÖZALP",
  publisher: "Özgür ÖZALP",
  icons: {
    icon: "/my-logo.png",
    apple: "/my-logo.png",
    shortcut: "/my-logo.png",
  },
  description: "Özgür ÖZALP is a Full Stack Developer based in Istanbul, TR.",
  other: {
    "apple-mobile-web-app-status-bar-style": "#f4f4f4",
    "msapplication-navbutton-color": "#f4f4f4",
    "msapplication-TileColor": "#f4f4f4",
    "mobile-web-app-capable": "yes",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
