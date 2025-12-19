import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

// CATEGORY IMAGES
import hardware from "../assets/images/hardware.png";
import modulerkitechen from "../assets/images/modulerkitechen.png";
import homewardrobe from "../assets/images/homewardrobe.png";
import MortiseHandles from "../assets/images/MortiseHandles.jpg";
import prodLocks from "../assets/images/prod-locks.jpg";
import wallpanel from "../assets/images/wallpanel.png";

// missing imports FIXED
import DrawerChannels from "../assets/images/DrawerChannels.jpg";
import GlassHardware from "../assets/images/GlassHardware.jpg";

export default function Products() {
  const categories = [
    {
      title: "Hardware Products",
      slug: "hardware-products",
      img: hardware,
    },
    {
      title: "Modular Kitchen Accessories",
      slug: "modular-kitchen",
      img: modulerkitechen,
    },
    {
      title: "Wardrobe Accessories",
      slug: "wardrobe",
      img: homewardrobe,
    },
    {
      title: "Door Handles & Fittings",
      slug: "door-handles",
      img: MortiseHandles,
    },
    {
      title: "Door Locks & Smart Locks",
      slug: "door-locks",
      img: prodLocks,
    },
    {
      title: "Drawer Channels & Hinges",
      slug: "drawer-channels",
      img: DrawerChannels,
    },
    {
      title: "Glass Hardware",
      slug: "glass-hardware",
      img: GlassHardware,
    },
    {
      title: "PVC Wall Panels",
      slug: "wall-panels",
      img: wallpanel,
    },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen">
      {/* PAGE TITLE */}
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          Hardware Product Categories
        </h1>
        <p className="text-center mt-3 text-gray-400 max-w-2xl mx-auto">
          Explore our complete range of premium hardware, modular kitchen and
          wardrobe accessories, door fittings and modern interior solutions.
        </p>
      </FadeIn>

      {/* CATEGORY GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <FadeIn key={cat.slug} delay={i * 120}>
            <Link
              to={`/products/${cat.slug}`}
              className="group bg-[#222] rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="py-5 text-center">
                <h3 className="text-xl font-medium group-hover:text-amber-400 transition">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  View hardware range →
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
