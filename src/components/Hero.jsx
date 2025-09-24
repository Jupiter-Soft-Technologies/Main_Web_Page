import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
        Transforming Ideas into{" "}
        <span className="text-yellow-300">Digital Excellence</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
        We craft scalable apps, stunning websites, and powerful digital
        solutions that accelerate your business growth.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="#services"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
