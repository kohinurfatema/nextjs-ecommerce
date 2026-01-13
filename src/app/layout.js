/**
 * ROOT LAYOUT
 *
 * KEY NEXT.JS CONCEPT: Layouts
 * - layout.js wraps all pages in its folder (and subfolders)
 * - This is the ROOT layout - wraps EVERY page in the app
 * - Perfect place for: Navbar, Footer, global styles
 *
 * {children} represents the page content that will be rendered
 * When you visit /items, {children} = items/page.js content
 *
 * METADATA:
 * - Export a "metadata" object for SEO
 * - Sets page title, description for search engines
 */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font configuration - Next.js optimizes font loading automatically
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata = {
  title: "ShopNext - Your One-Stop E-Commerce Store",
  description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar appears on ALL pages */}
        <Navbar />

        {/* Main content - different for each page */}
        <main>{children}</main>

        {/* Footer appears on ALL pages */}
        <Footer />
      </body>
    </html>
  );
}
