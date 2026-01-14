"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function AuthButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check if current path is Add Item
  const isAddItemPage = pathname === "/items/add";

  // Check cookie on mount AND when route changes
  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const authCookie = cookies.find((c) => c.trim().startsWith("auth="));
      setIsLoggedIn(authCookie?.includes("true") || false);
    };

    checkAuth();

    window.addEventListener("focus", checkAuth);
    return () => window.removeEventListener("focus", checkAuth);
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoggedIn(false);
    router.push("/");
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Link
          href="/items/add"
          className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${isAddItemPage
              ? "text-cyan-300 bg-white/10"
              : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
        >
          Add Item
          {isAddItemPage && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></span>
          )}
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-md shadow-rose-500/20"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="px-5 py-2 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-blue-500/20"
    >
      Login
    </Link>
  );
}
