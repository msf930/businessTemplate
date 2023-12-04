
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from "@/components/NavBar";
import React from "react";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Business website',
  description: 'Example business website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <NavBar/>
         {children}
         <Footer/>
      </body>
    </html>
  )
}
