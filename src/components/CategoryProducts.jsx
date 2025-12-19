import { useParams, Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import categoryData from "../data/category.json";

export default function CategoryProducts() {
  const { category } = useParams();

  const data = categoryData[category];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white pt-32 text-center">
        <h1 className="text-3xl font-semibold">Category Not Found</h1>
        <p className="mt-3 text-gray-400">
          Please select a valid category from Products page.
        </p>

        <Link
          to="/products"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen">
      {/* TITLE */}
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          {data.title}
        </h1>
      </FadeIn>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.products.map((item, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="group bg-[#222] rounded-xl overflow-hidden hover:shadow-xl transition-all cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-center py-4 text-lg font-medium">
                {item.name}
              </h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
