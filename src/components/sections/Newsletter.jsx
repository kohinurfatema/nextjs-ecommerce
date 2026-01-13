/**
 * NEWSLETTER SECTION
 *
 * KEY CONCEPT: This is still a Server Component!
 * - The form doesn't need client-side JavaScript for this demo
 * - The form action could use Server Actions (Next.js feature)
 * - For real functionality, we'd make this a Client Component
 *
 * NOTE: For now, this is just visual. We'll add functionality later if needed.
 */

export default function Newsletter() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest products, deals, and updates.
          </p>

          {/* Newsletter Form */}
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Trust text */}
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
