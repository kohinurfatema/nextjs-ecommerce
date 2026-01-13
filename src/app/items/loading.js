/**
 * LOADING STATE - /items/loading.js
 *
 * KEY NEXT.JS CONCEPT: Loading UI
 *
 * HOW IT WORKS:
 * 1. When user navigates to /items
 * 2. While data is being fetched, this component shows
 * 3. Once data is ready, page.js replaces this
 *
 * AUTOMATIC:
 * - Just create loading.js in the same folder
 * - Next.js handles showing/hiding automatically
 * - No manual loading states needed!
 *
 * This is called "Streaming" - parts of the page load progressively
 */

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Create 8 skeleton cards */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gray-200 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="flex justify-between mb-4">
                  <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
