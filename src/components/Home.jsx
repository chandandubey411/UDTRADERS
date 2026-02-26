import React from "react";
import { Link } from "react-router-dom";

// images
import heroBg from "../assets/images/hero-bg.jpg";
import hardware from "../assets/images/hardware.png";
import wallpanel from "../assets/images/wallpanel.png";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen flex items-center pt-28 relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.4)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Premium Hardware <br />
            <span className="text-amber-500">& Sanitary Solutions</span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 text-lg sm:text-xl font-light">
            Your one-stop destination for finest Hardware Items, Premium Sanitary Fittings, and Top Quality Paint Brands.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/products"
              className="px-8 py-4 rounded-full bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Explore Products
            </Link>

            <a
              href="https://wa.me/918076932943"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border-2 border-amber-500 text-amber-500 font-bold text-lg hover:bg-amber-500 hover:text-black hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111] to-[#1a1a1a] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Our Product <span className="text-amber-500">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-light">
              Discover our exclusive range of products tailored for modern homes and commercial spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: hardware, title: "Hardware Items", link: "/products/hardware", desc: "Hinges, Handles, Locks & more" },
              { img: wallpanel, title: "Sanitary Items", link: "/products/sanitary", desc: "Faucets, Basins, Pipes & Fittings" },
              { img: "/interiorpaint.jpg", title: "Paint Brands", link: "/products/paint", desc: "Premium interior & exterior paints" },
            ].map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-8 relative z-20 bg-gradient-to-t from-[#111] via-[#111] to-transparent -mt-20 pt-20">
                  <h3 className="text-2xl font-bold group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2 font-light">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center text-amber-500 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Range <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUSTED BRANDS (NEW SECTION) ================= */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-14">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Partnerships</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              🏆 We Work With Trusted Brands
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full opacity-50"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Asian Paints", img: "/asianpaints.png" },
              { name: "Berger", img: "/bergerpaint.avif" },
              { name: "Dulux", img: "/dulux.png" },
              { name: "Nerolac", img: "/nerolac.png" },
            ].map((brand, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-[#1a1a1a] rounded-full border border-white/5 hover:border-amber-500/30 transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-110 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] p-6 md:p-10"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 z-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-16">
            Why Choose <span className="text-amber-500">U&D Traders</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Premium Quality", icon: "⭐" },
              { title: "Wide Range", icon: "📦" },
              { title: "Trusted Supplier", icon: "🤝" },
              { title: "Best Pricing", icon: "💰" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:border-amber-500/30 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a] text-center border-t border-white/5">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Visit Our Store in Indirapuram
        </h2>

        <p className="mt-6 text-xl text-gray-400 font-light">
          Shop No. 2–4, Plot No. 71, Niti Khand, Ghaziabad
        </p>

        <a
          href="tel:8076932943"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300"
        >
          Call Us Now
        </a>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918076932943"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full text-white text-4xl shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="drop-shadow-md">💬</span>
      </a>
    </div>
  );
}
