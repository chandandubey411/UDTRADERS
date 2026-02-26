import { useParams, Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import categoryData from "../data/category.json";

export default function CategoryProducts() {
  const { category } = useParams();

  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Category Not Found</h1>
        <p className="text-gray-400 text-lg max-w-md">
          The category you are looking for does not exist or has been removed.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 hover:scale-105 transition-all duration-300"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white pt-32 pb-24 min-h-screen relative">
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-[#111] to-transparent pointer-events-none"></div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link to="/products" className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium mb-8 group transition-colors">
          <span className="transform group-hover:-translate-x-1 transition-transform mr-2">←</span> Back to Categories
        </Link>

        <FadeIn>
          <div className="border-b border-white/10 pb-10 mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {data.title}
            </h1>
            <div className="w-16 h-1 bg-amber-500 mt-6 rounded-full"></div>
          </div>
        </FadeIn>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.products.map((item, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] flex flex-col h-full bg-clip-padding">

                {/* Image Container with Hover Overlay */}
                <div className="relative h-64 overflow-hidden bg-white/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    {/* View Details Button (Appears on Hover) */}
                    <button className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 px-6 py-2.5 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center border-t border-white/5 grow flex items-center justify-center">
                  <h3 className="text-lg font-medium group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
