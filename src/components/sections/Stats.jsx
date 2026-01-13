/**
 * STATS SECTION
 *
 * Shows impressive numbers/achievements
 * Simple grid layout with large numbers
 */

export default function Stats() {
  const stats = [
    { value: "10K+", label: "Products Available" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100+", label: "Brand Partners" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
