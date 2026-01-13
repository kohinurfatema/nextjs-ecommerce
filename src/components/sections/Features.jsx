/**
 * FEATURES SECTION
 *
 * KEY CONCEPT: Component Composition
 * - Breaking UI into reusable pieces
 * - FeatureCard is a small component used inside Features
 * - Makes code cleaner and more maintainable
 */

// Feature Card - a reusable component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  // Data for features - could come from API in real app
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free shipping on all orders over $50. Fast and reliable delivery.",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "Your payment information is always protected with encryption.",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Our support team is always here to help you anytime.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the best shopping experience with features designed for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
