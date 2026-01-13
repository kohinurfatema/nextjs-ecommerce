/**
 * LOADING STATE for Item Details Page
 *
 * Shows skeleton UI while single item is loading
 */

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-32 mb-8 animate-pulse"></div>

        {/* Product Card Skeleton */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Skeleton */}
            <div className="md:w-1/2">
              <div className="w-full h-80 md:h-96 bg-gray-200 animate-pulse"></div>
            </div>

            {/* Details Skeleton */}
            <div className="md:w-1/2 p-8">
              <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-24 mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-8 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
