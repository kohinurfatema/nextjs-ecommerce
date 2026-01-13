/**
 * TESTIMONIALS SECTION
 *
 * KEY CONCEPT: Mapping over arrays to render lists
 * - React needs a unique "key" prop for each item
 * - Helps React track which items changed
 */

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      content:
        "Amazing shopping experience! The product quality exceeded my expectations and delivery was super fast.",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Verified Buyer",
      content:
        "Best prices I've found online. Customer service was incredibly helpful when I had questions.",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Verified Buyer",
      content:
        "I've been shopping here for months. Never disappointed with quality or service!",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
    },
  ];

  // Helper function to render stars
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers think.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-xl mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
