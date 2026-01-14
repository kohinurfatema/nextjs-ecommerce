"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  const pathname = usePathname();

  // Check if current path matches the link
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 sticky top-0 z-50 shadow-lg shadow-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
              ShopNext
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${isActive("/")
                  ? "text-cyan-300 bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            <Link
              href="/items"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${isActive("/items") && !pathname.includes("/add")
                  ? "text-cyan-300 bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
            >
              Products
              {isActive("/items") && !pathname.includes("/add") && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
              )}
            </Link>

            {/* Auth buttons */}
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2">
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
