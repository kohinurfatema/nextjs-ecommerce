/**
 * HERO SECTION
 *
 * KEY CONCEPT: This is a Server Component
 * - No useState, no useEffect, no onClick handlers needed
 * - Just static UI = perfect for server rendering
 *
 * TAILWIND CSS:
 * - Utility-first CSS framework
 * - Classes like "bg-blue-600" = background color blue
 * - "py-20" = padding top and bottom 20 units (80px)
 * - "text-4xl" = font size 4xl
 * - Responsive: "md:text-6xl" = applies at medium screens and up
 */

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ShopNext
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Your one-stop shop
            for everything you need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="#features"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
