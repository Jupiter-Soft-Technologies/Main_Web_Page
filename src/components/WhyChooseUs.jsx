import React from "react";
import AnimatedSection from "./AnimatedSection";

const points = [
  "Expert team with hands-on experience",
  "10+ projects delivered successfully",
  "End-to-end solutions from idea to launch",
  "Focus on performance, scalability & design",
];

function WhyChooseUs() {
  return (
    <AnimatedSection>
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="text-lg">{point}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default WhyChooseUs;
