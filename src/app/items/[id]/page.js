/**
 * ITEM DETAILS PAGE - /items/[id]
 *
 * SIMPLIFIED APPROACH: Direct File Reading
 *
 * Same as items list page - we read the JSON file directly
 * Then find the specific item by ID
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

// Read all items from file
function getAllItems() {
  const filePath = path.join(process.cwd(), "src", "data", "items.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Find single item by ID
function getItem(id) {
  const items = getAllItems();
  // find() returns the item where id matches, or undefined if not found
  return items.find((item) => item.id === parseInt(id));
}

// Page component with params
export default async function ItemDetailPage({ params }) {
  // Get ID from URL params
  // If URL is /items/3, then params.id = "3"
  const { id } = await params;

  // Find the item
  const item = getItem(id);

  // If item doesn't exist, show 404 page
  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/items"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Products
        </Link>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 md:h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              {/* Category */}
              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                {item.category}
              </span>

              {/* Name */}
              <h1 className="mt-4 text-3xl font-bold text-gray-900">
                {item.name}
              </h1>

              {/* Price */}
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-600">
                  ${item.price}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mt-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    item.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      item.inStock ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Description
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Add to Cart Button (placeholder) */}
              <button
                className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${
                  item.inStock
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!item.inStock}
              >
                {item.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
