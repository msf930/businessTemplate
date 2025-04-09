import { Roboto } from "next/font/google";
import "./globals.css";

import React from "react";

import { ReactLenis } from "@/app/utils/lenis";

const inter = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "Business website",
  description: "Example business website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={inter.className}>

          {children}
          {/*<Index />*/}
        </body>
      </ReactLenis>
    </html>
  );
}
