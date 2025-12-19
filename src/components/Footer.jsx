import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            U&D TRADERS
          </h3>
          <p className="text-sm leading-relaxed">
            U&D TRADERS is a trusted hardware and modular fittings store in
            Indirapuram, Ghaziabad, offering premium hardware products, kitchen
            and wardrobe accessories, door handles, locks, and interior fittings.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-amber-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-amber-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-amber-400 transition">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Hardware Products</li>
            <li>Modular Kitchen Accessories</li>
            <li>Wardrobe Accessories</li>
            <li>Door Handles & Locks</li>
            <li>Drawer Channels & Hinges</li>
            <li>Glass Hardware</li>
            <li>PVC Wall Panels</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="text-sm leading-relaxed">
            Shop No. 2–4, Plot No. 71, <br />
            Niti Khand, Indirapuram, <br />
            Ghaziabad
          </p>

          <p className="mt-3 text-sm">
            Phone:{" "}
            <a
              href="tel:8076932943"
              className="text-amber-400 hover:underline"
            >
              +91 80769 32943
            </a>
          </p>

          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:udtraders.co@gmail.com"
              className="text-amber-400 hover:underline"
            >
              udtraders.co@gmail.com
            </a>
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Mon – Sat: 9:00 AM – 8:00 PM
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} U&D TRADERS. All rights reserved.
      </div>
    </footer>
  );
}
