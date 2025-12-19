import React from "react";
import { Link } from "react-router-dom";

// images
import heroBg from "../assets/images/hero-bg.jpg";
import hardware from "../assets/images/hardware.png";
import modulerkitechen from "../assets/images/modulerkitechen.png";
import DrawerChannels from "../assets/images/DrawerChannels.jpg";
import Hinges from "../assets/images/Hinges.jpg";
import DigitalSmartLocks from "../assets/images/DigitalSmartLocks.jpg";
import wallpanel from "../assets/images/wallpanel.png";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen flex items-center pt-28"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,.75), rgba(0,0,0,.3)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Premium Hardware & <br />
            Modular Fittings
          </h1>

          <p className="mt-5 max-w-xl text-gray-300 text-lg">
            Hinges, Handles, Drawer Channels, Smart Locks, Modular Kitchen &
            Wardrobe Accessories — all under one roof.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="px-7 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              View Products
            </Link>

            <a
              href="https://wa.me/918076932943"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-full border border-amber-500 text-amber-400 font-semibold hover:bg-amber-500 hover:text-black transition"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
            Our Product Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: hardware, title: "Hardware Products", link: "/products/hardware-products" },
              { img: modulerkitechen, title: "Modular Kitchen Accessories", link: "/products/modular-kitchen" },
              { img: Hinges, title: "Hinges & Door Closers", link: "/products/hardware-products" },
              { img: DrawerChannels, title: "Drawer Channels", link: "/products/hardware-products" },
              { img: DigitalSmartLocks, title: "Smart & Digital Locks", link: "/products/door-locks" },
              { img: wallpanel, title: "PVC Wall Panels", link: "/products/wall-panels" },
            ].map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="group bg-[#222] rounded-xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-center py-4 text-lg font-medium">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Why Choose U&D Traders
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Premium Quality Products",
              "Wide Range of Hardware",
              "Trusted Local Supplier",
              "Competitive Pricing",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-[#222] rounded-xl p-6 text-center"
              >
                <p className="text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Visit Our Store in Indirapuram
        </h2>

        <p className="mt-4 text-gray-300">
          Shop No. 2–4, Plot No. 71, Niti Khand, Ghaziabad
        </p>

        <a
          href="tel:8076932943"
          className="inline-block mt-6 px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
        >
          Call Now
        </a>
      </section>
    </div>
  );
}
