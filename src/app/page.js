/**
 * HOME PAGE (Landing Page)
 *
 * KEY NEXT.JS CONCEPT: Page Files
 * - page.js in a folder = a route
 * - This file at src/app/page.js = route "/"
 *
 * This is a SERVER COMPONENT (default)
 * - All 7 sections are also Server Components
 * - Everything renders on the server
 * - HTML is sent to browser (great for SEO!)
 *
 * COMPONENT COMPOSITION:
 * - We import and use smaller components
 * - Each section is in its own file
 * - Makes code organized and maintainable
 */

// Import all landing page sections
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero - Main banner with CTA */}
      <Hero />

      {/* Section 2: Features - Why choose us */}
      <Features />

      {/* Section 3: Featured Products - Showcase items */}
      <FeaturedProducts />

      {/* Section 4: About - Company story */}
      <About />

      {/* Section 5: Testimonials - Customer reviews */}
      <Testimonials />

      {/* Section 6: Stats - Numbers/achievements */}
      <Stats />

      {/* Section 7: Newsletter - Email signup CTA */}
      <Newsletter />
    </>
  );
}
