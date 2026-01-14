export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 via-slate-400 to-slate-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">
            About ShopNext
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl"></div>

            {/* Main image */}
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="About ShopNext"
              className="relative rounded-3xl shadow-2xl w-full group-hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Since 2024</p>
                  <p className="text-gray-500 text-sm">Trusted Platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Building the Future of <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">E-Commerce</span>
            </h3>
            <p className="text-slate-900 mb-4 text-lg leading-relaxed font-medium">
              Founded in 2024, ShopNext has grown from a small startup to one of
              the most trusted e-commerce platforms. We believe in providing
              quality products at affordable prices.
            </p>
            <p className="text-slate-800 mb-8 leading-relaxed">
              Our mission is to make online shopping easy, secure, and enjoyable
              for everyone. We work directly with manufacturers to bring you the
              best deals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border border-blue-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">10K+</div>
                <div className="text-slate-600 text-sm mt-1">Products</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border border-blue-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">50K+</div>
                <div className="text-slate-600 text-sm mt-1">Customers</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center border border-blue-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">99%</div>
                <div className="text-slate-600 text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
