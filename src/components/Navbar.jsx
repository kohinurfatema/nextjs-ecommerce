/**
 * NAVBAR COMPONENT
 *
 * KEY NEXT.JS CONCEPTS:
 * 1. This is a SERVER COMPONENT (default in App Router)
 *    - No "use client" at top = Server Component
 *    - Renders on the server, sends HTML to browser
 *    - Better for SEO and performance
 *
 * 2. Link Component (from 'next/link')
 *    - Use Link instead of <a> for internal navigation
 *    - Enables client-side navigation (no page refresh)
 *    - Prefetches pages in viewport automatically
 */

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo - Links to home page */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">ShopNext</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
