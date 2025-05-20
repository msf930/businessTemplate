import { Roboto } from "next/font/google";
import "./globals.css";

import React from "react";

import { ReactLenis } from "@/app/utils/lenis";
import { GoogleTagManager } from '@next/third-parties/google'
import MicrosoftClarity from "@/metrics/MicrosoftClarity";

const inter = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "Rocky Mountain Remodels",
  description: "Rocky Mountain Remodels has over 35 combined years of experience remodeling residential, commercial, and retail spaces",
  verification: {
    google: "3E0o470gwiZ9udbwNnCorkvn9AiccxYpLWv56ns8BGE",
},
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_CONTAINER_ID} />
      <ReactLenis root>
        <body className={inter.className}>
          {children}
          <MicrosoftClarity/>
        </body>
      </ReactLenis>
    </html>
  );
}
