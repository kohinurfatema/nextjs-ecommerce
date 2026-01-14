import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ShopNext
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Your one-stop shop for amazing products. Built with Next.js for
              the best shopping experience.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300">
                <span className="text-lg">📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400">📧</span>
                contact@shopnext.com
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400">📞</span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300">
                <span className="text-cyan-400">📍</span>
                123 Commerce Street
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ShopNext. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
