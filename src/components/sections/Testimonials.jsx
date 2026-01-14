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

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-800 via-blue-950 to-slate-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what real customers think.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-3xl"></div>

              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-6xl text-blue-100 font-serif">"</div>

              {/* Stars */}
              <div className="relative text-yellow-400 text-xl mb-4 drop-shadow">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="relative text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="relative flex items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-50"></div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="relative w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-cyan-600 text-sm font-medium">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
