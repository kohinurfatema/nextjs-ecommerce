/**
 * ITEMS LIST PAGE - /items
 *
 * SIMPLIFIED APPROACH: Direct File Reading
 *
 * Since this is a SERVER COMPONENT, we can:
 * - Use Node.js modules (fs, path)
 * - Read files directly from the server
 * - No need for API routes for reading!
 *
 * WHY THIS WORKS:
 * - Server Components run on the server (Node.js)
 * - Node.js can read files using 'fs' module
 * - The browser never sees this code
 */

import Link from "next/link";
import fs from "fs";
import path from "path";

// Direct file reading - no API needed!
function getItems() {
  // path.join creates the full path to our file
  // process.cwd() = current working directory (project root)
  const filePath = path.join(process.cwd(), "src", "data", "items.json");

  // fs.readFileSync reads the file content as text
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // JSON.parse converts text to JavaScript array
  const items = JSON.parse(fileContent);

  return items;
}

// Page component - no async needed for direct file reading!
export default function ItemsPage() {
  // Get items directly from file
  const items = getItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of high-quality products at great prices.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category Badge */}
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {item.category}
                </span>

                {/* Name */}
                <h2 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-1">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Stock */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    ${item.price}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      item.inStock
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                    } px-2 py-1 rounded`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/items/${item.id}`}
                  className="mt-4 block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
