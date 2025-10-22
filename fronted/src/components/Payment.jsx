import React, { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentLink = "https://razorpay.me/@rohityadav5155";
    window.location.href = paymentLink;
  };

  return (
    <section
      id="payment"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-gray-950 via-blue-950/80 to-purple-950 text-gray-100 overflow-hidden"
    >
      {/* Glowing AI Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,150,255,0.25)_0%,_transparent_70%)] blur-3xl"></div>

      <div className="w-[80%] max-w-5xl bg-gray-900/50 backdrop-blur-xl border border-blue-400/20 rounded-3xl shadow-lg p-8 md:p-12 transition-all hover:shadow-blue-500/40">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 mb-10">
          Make a Secure Payment 💳
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 — Name & Mobile */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-blue-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-blue-300 mb-2"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all"
              />
            </div>
          </div>

          {/* Row 2 — Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-blue-300 mb-2"
            >
              Payment Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="E.g. Website design, development, or consultation"
              className="w-full bg-gray-950/40 border border-blue-400/20 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-1/2 mx-auto block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Proceed to Pay 🚀
          </button>
        </form>

        {/* Secure Payment Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Secure payments powered by{" "}
          <span className="text-blue-400 font-semibold">Razorpay</span>
        </p>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
    </section>
  );
};

export default Payment;
