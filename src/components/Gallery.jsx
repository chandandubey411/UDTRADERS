import FadeIn from "./FadeIn";

// GALLERY IMAGES (use your assets)
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/hardware-wall.jpg";
import gallery6 from "../assets/images/showroom-wide.jpg";

export default function Gallery() {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen overflow-x-hidden">
      {/* PAGE TITLE */}
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          Gallery
        </h1>
        <p className="text-center mt-3 text-gray-400 max-w-2xl mx-auto">
          A glimpse of our hardware showroom, product displays, and premium
          interior fittings at U&D TRADERS.
        </p>
      </FadeIn>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="group overflow-hidden rounded-xl bg-[#222]">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
