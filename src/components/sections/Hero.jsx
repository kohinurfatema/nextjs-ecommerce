import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-400 via-blue-950 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-semibold">New Collection Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Discover the</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
              Future of Shopping
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience premium quality products curated just for you.
            Elevate your lifestyle with our exclusive collection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/items"
              className="group relative px-8 py-4 rounded-xl font-bold overflow-hidden bg-white text-slate-900 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 rounded-xl font-bold border-2 border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Explore More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">10K+</p>
              <p className="text-cyan-200 text-sm mt-1 font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">500+</p>
              <p className="text-cyan-200 text-sm mt-1 font-medium">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white">99%</p>
              <p className="text-cyan-200 text-sm mt-1 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
