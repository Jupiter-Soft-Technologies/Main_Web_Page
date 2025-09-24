import React from "react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Startup Founder",
    text: "They delivered our app faster than expected with amazing quality. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "Business Owner",
    text: "Our new website looks stunning and has boosted our client engagement significantly.",
  },
];

function Testimonials() {
  return (
    <AnimatedSection>
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-gray-600 italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-gray-500 text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Testimonials;
