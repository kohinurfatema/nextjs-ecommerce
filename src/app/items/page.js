import Link from "next/link";
import fs from "fs";
import path from "path";

// Page metadata for SEO
export const metadata = {
  title: "Products | ShopNext",
  description: "Browse our collection of high-quality products. Find electronics, clothing, home goods and more at great prices.",
};

// Direct file reading - Server Side
function getItems() {
  const filePath = path.join(process.cwd(), "src", "data", "items.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const items = JSON.parse(fileContent);
  return items;
}

export default function ItemsPage() {
  const items = getItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- HEADER SECTION (LIGHT THEME - VISIBLE TEXT) --- */}
      <div className="pt-20 pb-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Text is now Slate-900 (Dark) so it is visible on the white background */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our Products
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Browse our collection of high-quality products. 
              Find the latest electronics and accessories at the best prices.
            </p>
          </div>
        </div>
      </div>

      {/* --- PRODUCTS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="h-60 overflow-hidden relative bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600 px-3 py-1.5 rounded-lg shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>

                <p className="mt-2 text-slate-500 text-sm line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Price and Stock */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      item.inStock
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-red-600 bg-red-50"
                    } px-3 py-1 rounded-md border ${item.inStock ? 'border-emerald-100' : 'border-red-100'}`}
                  >
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* --- OPTION 2 STYLE BUTTON (DARK & PREMIUM) --- */}
                <Link
                  href={`/items/${item.id}`}
                  className="mt-6 block text-center bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-md active:scale-95"
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