import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

// CATEGORY IMAGES
import hardware from "../assets/images/hardware.png";
import wallpanel from "../assets/images/wallpanel.png";

export default function Products() {
  const categories = [
    {
      title: "Hardware Items",
      slug: "hardware",
      img: hardware,
      desc: "Premium Hinges, Channels, Handles & More",
    },
    {
      title: "Sanitary Items",
      slug: "sanitary",
      img: wallpanel,
      desc: "Top Quality Pipes, Faucets & Bathroom Accessories",
    },
    {
      title: "Paint Brands",
      slug: "paint",
      img: "/interiorpaint.jpg",
      desc: "Trusted Interior & Exterior Colour Solutions",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-[#111] to-transparent pointer-events-none"></div>

      {/* PAGE TITLE */}
      <FadeIn>
        <div className="text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Our Main <span className="text-amber-500">Categories</span>
          </h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Explore our curated collections of premium hardware, top-grade sanitary fittings, and trusted paint brands to build your perfect space.
          </p>
        </div>
      </FadeIn>

      {/* CATEGORY GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {categories.map((cat, i) => (
          <FadeIn key={cat.slug} delay={i * 120}>
            <Link
              to={`/products/${cat.slug}`}
              className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-lg hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]"
            >
              <div className="relative h-80 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              <div className="p-8 flex-grow flex flex-col border-t border-white/5 bg-[#141414]">
                <h3 className="text-2xl font-bold group-hover:text-amber-500 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-3 text-gray-400 font-light grow">
                  {cat.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-amber-500 font-medium">Explore Collection</span>
                  <div className="w-10 h-10 rounded-full bg-[#222] group-hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                    <span className="text-white group-hover:text-black shrink-0 transition-colors duration-300 transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
