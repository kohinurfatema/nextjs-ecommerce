/**
 * ABOUT SECTION
 *
 * Simple informational section
 * Shows company story/values
 */

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-blue-600 absolute -top-4 -left-4 w-full h-full rounded-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="About ShopNext"
              className="relative rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ShopNext
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, ShopNext has grown from a small startup to one of
              the most trusted e-commerce platforms. We believe in providing
              quality products at affordable prices.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to make online shopping easy, secure, and enjoyable
              for everyone. We work directly with manufacturers to bring you the
              best deals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
