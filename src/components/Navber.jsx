import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-white leading-none"
        >
          <img
            src={logo}
            alt="U&D Traders Logo"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-white text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group ${
                location.pathname === item.path
                  ? "text-amber-400"
                  : "text-white"
              }`}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CALL BUTTON */}
        <div className="hidden md:block">
          <a
            href="tel:8076932943"
            className="px-5 py-2 rounded-full bg-amber-500 text-black text-sm font-semibold hover:bg-amber-400 transition"
          >
            CALL NOW
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center">
          <div className="text-white">
            <p className="font-bold tracking-widest">U&D TRADERS</p>
            <p className="text-xs text-amber-400">Hardware & Interior</p>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-white">
            ✕
          </button>
        </div>

        <nav className="mt-8 flex flex-col items-center gap-6 text-white text-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="hover:text-amber-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="tel:8076932943"
            className="mt-6 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            CALL NOW
          </a>
        </nav>
      </div>
    </header>
  );
}
