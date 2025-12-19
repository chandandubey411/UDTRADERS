import FadeIn from "./FadeIn";

// images
import aboutHero from "../assets/images/about-hero.jpg";
import showroomWide from "../assets/images/showroom-wide.jpg";
import craftsmanship from "../assets/images/craftsmanship.jpg";
import hardwareWall from "../assets/images/hardware-wall.jpg";

export default function About() {
  return (
    <div className="bg-[#151515] text-white pt-28 pb-16 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About U&D TRADERS
            </h1>
            <p className="mt-4 max-w-2xl text-gray-300">
              Trusted hardware & interior fittings store serving Indirapuram,
              Ghaziabad with quality and reliability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Who We Are
              </h2>

              <p className="mt-5 text-gray-300 leading-relaxed">
                <strong>U&D TRADERS</strong> is a dedicated hardware and interior
                fittings store located in Niti Khand, Indirapuram, Ghaziabad.
                We deal in premium hardware products, modular kitchen
                accessories, wardrobes fittings, door handles, locks, hinges,
                drawer channels, and smart locking systems.
              </p>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Our focus is to provide durable, functional, and modern hardware
                solutions that perfectly match today’s residential and
                commercial requirements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <img
              src={showroomWide}
              alt="U&D Traders Showroom"
              className="rounded-2xl w-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-[#111]">
        <FadeIn>
          <h2 className="text-center text-3xl sm:text-4xl font-semibold">
            Why Choose U&D Traders
          </h2>
        </FadeIn>

        <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              title: "Premium Hardware",
              desc: "High-quality hinges, locks, handles & fittings.",
            },
            {
              title: "Wide Product Range",
              desc: "Complete solutions for homes & offices.",
            },
            {
              title: "Expert Assistance",
              desc: "Right guidance for right hardware selection.",
            },
            {
              title: "Trusted Store",
              desc: "Local trust built with quality & service.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div className="bg-[#1f1f1f] p-6 rounded-xl">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ================= QUALITY & DISPLAY ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <img
              src={hardwareWall}
              alt="Hardware Display Wall"
              className="rounded-2xl w-full object-cover"
            />
          </FadeIn>

          <FadeIn delay={150}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Premium Hardware Display
              </h2>
              <p className="mt-5 text-gray-300 leading-relaxed">
                Our showroom features a well-organized display of premium door
                handles, hinges, drawer channels, sliding systems, glass
                hardware, and digital smart locks — allowing customers to see,
                feel, and choose confidently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= CRAFTSMANSHIP ================= */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Quality That Lasts
              </h2>
              <p className="mt-5 text-gray-300 leading-relaxed">
                At U&D TRADERS, every product is selected with a focus on
                durability, smooth performance, and modern design. We believe
                good hardware is the foundation of long-lasting interiors.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <img
              src={craftsmanship}
              alt="Hardware Craftsmanship"
              className="rounded-2xl w-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Visit U&D TRADERS
            </h2>
            <p className="mt-4 text-gray-400">
              Shop No. 2–4, Plot No. 71, Niti Khand, Indirapuram, Ghaziabad
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a
                href="tel:8076932943"
                className="px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
              >
                Call Now
              </a>
              <a
                href="mailto:udtraders.co@gmail.com"
                className="px-8 py-3 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
