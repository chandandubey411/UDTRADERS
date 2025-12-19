import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <div className="bg-[#1a1a1a] text-white pt-28 pb-16 min-h-screen">
      {/* PAGE HEADING */}
      <FadeIn>
        <h1 className="text-center text-4xl sm:text-5xl font-semibold">
          Contact U&D TRADERS
        </h1>
        <p className="text-center mt-3 text-gray-400 max-w-2xl mx-auto">
          Get in touch with us for hardware products, pricing, or enquiries.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* CONTACT INFO */}
        <FadeIn>
          <div>
            <h2 className="text-2xl font-semibold">Store Information</h2>

            <p className="mt-4 text-gray-300">
              <strong>Address:</strong> <br />
              Shop No. 2–4, Plot No. 71, <br />
              Niti Khand, Indirapuram, Ghaziabad
            </p>

            <p className="mt-4 text-gray-300">
              <strong>Phone:</strong> <br />
              <a href="tel:8076932943" className="text-amber-400">
                +91 80769 32943
              </a>
            </p>

            <p className="mt-4 text-gray-300">
              <strong>Email:</strong> <br />
              <a
                href="mailto:udtraders.co@gmail.com"
                className="text-amber-400"
              >
                udtraders.co@gmail.com
              </a>
            </p>

            <p className="mt-6 text-gray-400">
              Business Hours: <br />
              Monday – Saturday : 9:00 AM – 8:00 PM
            </p>
          </div>
        </FadeIn>

        {/* CONTACT FORM */}
        <FadeIn delay={150}>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-[#222] rounded-2xl p-8 space-y-5"
          >
            {/* ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="4c31e106-ed27-43ec-9811-03a496832d22"
            />

            {/* OPTIONAL CONFIG */}
            <input type="hidden" name="subject" value="New Enquiry - U&D TRADERS" />
            <input type="hidden" name="from_name" value="U&D TRADERS Website" />

            {/* NAME */}
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-amber-400"
                placeholder="Your Name"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-amber-400"
                placeholder="Your Phone Number"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-amber-400"
                placeholder="Your Email"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none focus:border-amber-400"
                placeholder="Your enquiry..."
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              Send Enquiry
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
