import FadeIn from "./FadeIn";

export default function Reviews() {
  const reviews = [
    {
      name: "Amit Sharma",
      rating: 5,
      text: "Best hardware shop in Indirapuram. Huge variety of door handles, hinges and drawer channels. Quality products at reasonable prices.",
    },
    {
      name: "Rohit Verma",
      rating: 5,
      text: "Purchased digital smart lock and glass hardware from U&D Traders. Staff is knowledgeable and helped me choose the right product.",
    },
    {
      name: "Neha Gupta",
      rating: 4,
      text: "Very good range of modular kitchen accessories and wardrobe fittings. Showroom is neat and well organized.",
    },
    {
      name: "Sandeep Singh",
      rating: 5,
      text: "One-stop solution for all hardware needs. Hinges, channels, locks – everything available under one roof.",
    },
    {
      name: "Priya Malhotra",
      rating: 4,
      text: "Reliable hardware store with genuine products. Prices are fair and service is good.",
    },
  ];

  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen">
      {/* PAGE HEADING */}
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          Customer Reviews
        </h1>
        <p className="text-center mt-3 text-gray-400 max-w-2xl mx-auto">
          What our customers say about U&D TRADERS and our hardware products.
        </p>
      </FadeIn>

      {/* REVIEWS GRID */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="bg-[#222] rounded-xl p-6 hover:shadow-xl transition">
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 mb-3">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.379 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.379-2.454a1 1 0 00-1.175 0l-3.379 2.454c-.784.57-1.838-.196-1.539-1.118l1.285-3.966a1 1 0 00-.363-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {review.text}
              </p>

              {/* Name */}
              <p className="mt-4 font-semibold">{review.name}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA */}
      <FadeIn>
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Have You Visited U&D TRADERS?
          </h2>
          <p className="mt-3 text-gray-400">
            We would love to hear your feedback.
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            Leave a Review
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
