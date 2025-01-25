import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";
import Footer from "@/components/Footer";

import { ReactLenis } from "@/app/utils/lenis";

const inter = Inter({ subsets: ["latin"] });

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
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
