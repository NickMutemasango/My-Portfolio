"use client"; // Add this at the top to mark this as a Client Component


import localFont from "next/font/local";
import "./globals.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

import Transition from '../components/Transition';

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      {/* Ensure fonts are included here */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Layout inside body */}
        <Layout>
          <AnimatePresence mode="wait">
         
              <Transition />
              {children}
          </AnimatePresence>
        </Layout>
      </body>
    </html>
  );
}
