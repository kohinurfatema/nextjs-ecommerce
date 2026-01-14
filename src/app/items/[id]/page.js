/**
 * ITEM DETAILS PAGE - /items/[id]
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

// Dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getItem(id);

  if (!item) {
    return { title: "Product Not Found | ShopNext" };
  }

  return {
    title: `${item.name} | ShopNext`,
    description: item.description,
  };
}

// Read all items from file
function getAllItems() {
  const filePath = path.join(process.cwd(), "src", "data", "items.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

// Find single item by ID
function getItem(id) {
  const items = getAllItems();
  return items.find((item) => item.id === parseInt(id));
}

export default async function ItemDetailPage({ params }) {
  const { id } = await params;
  const item = getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- HEADER SECTION (OPTION 1 STYLE: LIGHT & VISIBLE) --- */}
      <div className="bg-white border-b border-gray-100 pt-12 pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button - Darkened for visibility */}
          <Link
            href="/items"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors"
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
          <h1 className="mt-6 text-xl font-bold text-slate-400 uppercase tracking-widest">Product Details</h1>
        </div>
      </div>

      {/* --- PRODUCT CARD SECTION --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-12">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Image Area */}
            <div className="md:w-1/2 relative bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 md:h-full object-cover"
              />
              <span className="absolute top-6 left-6 text-xs font-bold uppercase tracking-widest text-white bg-blue-600 px-4 py-2 rounded-xl shadow-lg">
                {item.category}
              </span>
            </div>

            {/* Details Area */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                {item.name}
              </h1>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  ${item.price}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mt-6">
                <span
                  className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                    item.inStock
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : "bg-red-50 text-red-700 border border-red-100"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      item.inStock ? "bg-emerald-500 animate-pulse" : "bg-red-500"
                    }`}
                  ></span>
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <div className="mt-10">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Description
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>

              {/* Shipping/Returns Badges */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
                <span className="text-[11px] font-bold uppercase text-slate-500 bg-gray-100 px-3 py-1 rounded-md">Free Delivery</span>
                <span className="text-[11px] font-bold uppercase text-slate-500 bg-gray-100 px-3 py-1 rounded-md">Original Product</span>
              </div>

              {/* --- OPTION 2 STYLE BUTTON (DARK & PREMIUM) --- */}
              <button
                className={`mt-10 w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg active:scale-[0.98] ${
                  item.inStock
                    ? "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-200 hover:shadow-blue-200"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                }`}
                disabled={!item.inStock}
              >
                {item.inStock ? "Add to Cart" : "Currently Unavailable"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}