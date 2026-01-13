/**
 * NOT FOUND PAGE - /items/[id]/not-found.js
 *
 * KEY NEXT.JS CONCEPT: Custom 404 Pages
 *
 * HOW IT WORKS:
 * 1. When notFound() is called in page.js
 * 2. Next.js looks for not-found.js in same folder
 * 3. Shows this component instead
 *
 * You can have different 404 pages for different sections:
 * - /items/[id]/not-found.js → for missing products
 * - /app/not-found.js → global 404
 */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Icon */}
        <div className="text-8xl mb-4">🔍</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn't find the product you're looking for. It may have
          been removed or the link might be incorrect.
        </p>

        {/* Back to Products Button */}
        <Link
          href="/items"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}
