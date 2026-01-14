// Feature Card - a reusable component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-white/50 group overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-3xl"></div>

      {/* Icon */}
      <div className="relative w-18 h-18 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <span className="text-3xl drop-shadow-md">{icon}</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
      <p className="relative text-gray-500 leading-relaxed">{description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

export default function Features() {
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
    <section id="features" className="relative py-24 bg-gradient-to-b from-gray-100 via-slate-400 to-slate-900">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Our Benefits</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
